/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.model.Tipo;
import com.dmf.facturacion.repositorios.ClienteJPARepository;
import java.util.List;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marcelo
 */
@RestController
@RequestMapping(value = "/api/cliente")
public class ClienteRestController {

    @Autowired
    ClienteJPARepository clienteRepository;

    @GetMapping(value = "{clienteId}")
    public Cliente get(@PathVariable Long clienteId) {
        System.out.println("Retornando un solo cliente"+clienteId+ "\r");
        return clienteRepository.findOne(clienteId);
    }
    
    @GetMapping
    public List<Cliente> all(ModelMap model) {
        System.out.println("Listando los usuarios\r");
        return clienteRepository.findAll();
    }
    
    @GetMapping(value = "/tipos")
    public List<Tipo> allTipos(ModelMap model) {
        System.out.println("Listando los tipos\r");
        return clienteRepository.findTipoAll();
    }


    @PostMapping
    public Cliente add(@RequestBody Cliente cliente, BindingResult result) {
        if (result.hasErrors()) {
            return cliente;
        }
        clienteRepository.save(cliente);
        return cliente;
//        return "redirect:/api/cliente";
    }
    
    
    @PostMapping( value="/delete")
    public void delete(@RequestBody Cliente cliente, BindingResult result){
        if (result.hasErrors()) {
            return ;
        }
        clienteRepository.delete(cliente);
        return ;
    }

}
