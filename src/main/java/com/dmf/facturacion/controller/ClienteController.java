/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.repositorios.ClienteJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author marcelo
 */
@Controller
public class ClienteController {
    
    @Autowired
    ClienteJPARepository clienteRepository;
    
    /**
     * Debe retornar la vista para la lista de clientes
     * @return 
     */
    @GetMapping(value = "/cliente")
    public String get() {
        
        return "static/cliente.html";
    }
    
    
}
