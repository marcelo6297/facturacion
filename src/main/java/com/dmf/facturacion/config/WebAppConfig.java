/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 *
 * @author marcelo
 */
@Configuration
public class WebAppConfig extends WebMvcConfigurerAdapter{

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/clientes/**").setViewName("forward:/index.html");
        registry.addViewController("/productos/**").setViewName("forward:/index.html");
        registry.addViewController("/compras/**").setViewName("forward:/index.html");
        registry.addViewController("/login/**").setViewName("forward:/index.html");
//        registry.addViewController("/login").setViewName("login");
    }
    
}
