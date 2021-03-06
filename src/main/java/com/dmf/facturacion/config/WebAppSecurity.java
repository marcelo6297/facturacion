/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.config;

import com.dmf.facturacion.servicios.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

/**
 *
 * @author marcelo
 */

@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses = UserServices.class)
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class WebAppSecurity extends WebSecurityConfigurerAdapter {
    //Configurar la clase que consulta la bbdd
    //
    @Autowired
    UserServices userServices;
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/api**").access("hasRole('ADMIN')")
                .antMatchers("/css/**","/js/**","/login.html","/login", "/hello")
                .permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login.html")
                .permitAll()
                .and()
            .logout()
                .permitAll()
            .and().csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        System.out.println("com.dmf.facturacion.config.WebAppSecurity.configureGlobal()");
//        auth.userDetailsService(userServices).passwordEncoder(passwordencoder());
        auth.userDetailsService(userServices);
            
        
    }
    
    @Bean(name="passwordEncoder")
    public PasswordEncoder passwordencoder() {
        return new BCryptPasswordEncoder();
    }
    
    
}
