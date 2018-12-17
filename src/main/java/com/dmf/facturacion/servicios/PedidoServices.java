/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.Compra;
import com.dmf.facturacion.model.CompraDetalle;
import com.dmf.facturacion.model.Pedido;
import java.util.List;
import org.springframework.stereotype.Component;

/**
 *
 * @author marcelo
 */
@Component
public interface PedidoServices {
    /**
     * Guarda un pedido con todos los detalles, tambien chequea
     * ue se cumplan todos los datos enviados
     * Opera de forma transaccional
     */
    public void save(Pedido pedido);
    
    
    
    /**
     * Retorna la lista de pedidos
     * @return 
     */
    public List<Pedido> findAll();
}
