/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.model.Tipo;
import com.dmf.facturacion.model.TipoCliente;
import com.dmf.facturacion.repositorios.ClienteJPARepository;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
    
    /**
     * Obtener los datos filtrados de los clientes
     * @param model
     * @return 
     */
    @GetMapping(value="/search")
    public List<Cliente> filter(@RequestParam("search") String search) {
        System.out.printf("Buscando %s \r", search);
        

        return clienteRepository.searchAll(search,search);
        
    }
    
    @GetMapping(value = "/tipos")
    public List<TipoCliente> allTipos(ModelMap model) {
        System.out.println("Listando los tipos\r");
        List<TipoCliente> tipos = Arrays.asList(new TipoCliente[]
        {TipoCliente.OCACIONAL,TipoCliente.MINORISTA,TipoCliente.MAYORISTA,TipoCliente.DISTRIBUIDOR});
        return tipos;
    }


    @PostMapping
    public Cliente save(@RequestBody Cliente cliente, BindingResult result) {
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
