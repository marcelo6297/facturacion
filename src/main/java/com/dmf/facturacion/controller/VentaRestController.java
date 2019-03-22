/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.EstadoFact;
import com.dmf.facturacion.model.Venta;
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
@RequestMapping(value = "/api/ventas")
public class VentaRestController {

    @Autowired
    ProductoServices service;

    @PostMapping 
    public Venta saveOrUpdate(@RequestBody Venta v, BindingResult result) {
        if (result.hasErrors()) {
            return v;
        }
   
        v.setEstado(EstadoFact.Pendiente);
        service.saveVenta(v);
        service.updateStock();
        return v;
    }
    
    @PostMapping (value = "anular")
    
    public void anular(@RequestBody Long[] ids) {
        
        System.out.println("IDS en anular");
        service.anularVentas(ids);
        service.updateStock();

    }
    
    @GetMapping
    public List<Venta> getAll(){
        return service.ventaJpaRepo().findAll();
    }  
    
    @GetMapping(value = "{ventaId}")
    public Venta get(@PathVariable Long ventaId){
        return service.ventaJpaRepo().findOne(ventaId);
    }
}
