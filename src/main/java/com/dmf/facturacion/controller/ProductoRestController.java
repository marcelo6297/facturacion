/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.repositorios.ProductoJPARepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marcelo
 */

@RestController
@RequestMapping(value = "/api/productos")
public class ProductoRestController {
    
    @Autowired
    ProductoJPARepository productoRepository;
    
    @GetMapping
    public List<Producto> all() {
        return productoRepository.findAll();
    }
}
