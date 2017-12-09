/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.Pedido;
import com.dmf.facturacion.repositorios.PedidoJPARepository;
import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
    
    /**
     * Guardar los datos del pedido
     * @param pedido
     * @param result
     * @throws java.lang.Exception si el servicio no puede guardar el objeto
     */
    @PostMapping
    public ResponseEntity<Void> save(@RequestBody Pedido pedido, BindingResult result) throws Exception {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().build();
        }
        pedidoRepository.save(pedido);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
				"/{id}").buildAndExpand(pedido.getId()).toUri();
        return ResponseEntity.created(location).build();
    }
}
