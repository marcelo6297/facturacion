/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.security;

import com.dmf.facturacion.security.JWTAuthenticationFilter;
import com.dmf.facturacion.security.JWTAuthorizationFilter;
import com.dmf.facturacion.servicios.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 *
 * @author marcelo
 */

@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses = UserServices.class)
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebAppSecurity extends WebSecurityConfigurerAdapter {
    //Configurar la clase que consulta la bbdd
    //
    @Autowired
    UserServices userServices;
    
//    @Autowired
//    private JwtAuthEntryPoint unauthorizedHandler;
 
//    @Bean
//    public JwtAuthTokenFilter authenticationJwtTokenFilter() {
//        return new JwtAuthTokenFilter();
//    }
    
    /*
    * 1. Se desactiva el uso de cookies
    * 2. Se activa la configuración CORS con los valores por defecto
    * 3. Se desactiva el filtro CSRF
    * 4. Se indica que el login no requiere autenticación
    * 5. Se indica que el resto de URLs esten securizadas
     */

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .cors().and().csrf().disable()
            .authorizeRequests()
            .antMatchers(HttpMethod.POST,"/api/principal/login").permitAll()
            .antMatchers("/api/**").authenticated()
//            .antMatchers("/index.html").permitAll()
//            .antMatchers("/clientes/**").permitAll()
//            .antMatchers("/productos/**").permitAll()
//            .antMatchers("/ventas/**").permitAll()
//            .antMatchers("/*.js").permitAll()
//            .antMatchers("/favicon.ico").permitAll()
            .anyRequest().permitAll().and()
//            .addFilter(new JWTAuthenticationFilter(authenticationManager()))
            .addFilter(new JWTAuthorizationFilter(authenticationManager(), userServices));
        
//         http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        System.out.println("com.dmf.facturacion.config.WebAppSecurity.configureGlobal()");
        auth.userDetailsService(userServices).passwordEncoder(passwordEncoder()); 
    }
    
    @Bean(name="PasswordEncoder")
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    
}