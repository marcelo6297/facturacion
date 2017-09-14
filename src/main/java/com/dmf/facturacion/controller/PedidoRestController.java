/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.Pedido;
import com.dmf.facturacion.repositorios.PedidoJPARepository;
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
@RequestMapping(value = "api/pedido")
public class PedidoRestController {
    
    @Autowired
    PedidoJPARepository pedidoRepository;
    @GetMapping
    public List<Pedido> all() {
        return pedidoRepository.findAll();
    }
}
