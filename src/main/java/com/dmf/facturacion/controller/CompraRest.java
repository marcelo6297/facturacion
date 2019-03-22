/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.model.Compra;
import com.dmf.facturacion.model.CompraDetalle;
import com.dmf.facturacion.servicios.ProductoServices;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marcelo
 */
@RestController
@RequestMapping(value = "api/compras")
public class CompraRest {
    
    @Autowired
    ProductoServices service;
    
    @GetMapping
    public List<Compra> getAll(){
        return service.compraRepo().findAll();
    }        
    
    @GetMapping(value = "{compraId}")
    public Compra get(@PathVariable Long compraId){
        return service.compraRepo().findOne(compraId);
    }
    
    
    @PostMapping(value = "/save")
    
    public Compra save(@RequestBody Compra c,   BindingResult result) {
        if (result.hasErrors()) {
            return c;
        }
        service.saveCompra(c);
        service.updateStock();
        
        return c;
//        return "redirect:/api/cliente";
    }
    
     @PostMapping(value = "/delete")
    @Transactional
    public Boolean deleteAll(@RequestBody Long[] ids) {
        
        for (Long id : ids) 
            service.compraRepo().delete(id);
        
        return Boolean.TRUE;

    }
    
}
