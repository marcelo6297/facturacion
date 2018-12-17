/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.Compra;
import com.dmf.facturacion.model.CompraDetalle;
import com.dmf.facturacion.model.Pedido;
import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.model.ProductoPedido;
import com.dmf.facturacion.repositorios.CompraDetalleJpaRepo;
import com.dmf.facturacion.repositorios.PedidoJPARepository;
import com.dmf.facturacion.repositorios.ProductoPedidoJPARepository;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.dmf.facturacion.repositorios.CompraJpaRepo;

/**
 * Implementa los servicios 
 * @author marcelo
 */
@Service("PedidoServices")
public class PedidoServicesImpl implements PedidoServices{
    
    
    PedidoJPARepository pedidoRepository;
    ProductoPedidoJPARepository ppJPARepository;
    CompraJpaRepo compraRepo;
    CompraDetalleJpaRepo compraDetalleJpaRepo;

    
    
    
    
    
    
    @Override
    @Transactional
    public void save(Pedido pedido) {
        pedidoRepository.save(pedido);
        Iterator it = pedido.getProductoPedidos().iterator();
        while (it.hasNext()) {
            ProductoPedido pp = (ProductoPedido) it.next();
            pp.setPedido(pedido);
        }
        
        
        ppJPARepository.save(pedido.getProductoPedidos());
    }

    @Autowired
    public PedidoServicesImpl(PedidoJPARepository pedidoRepository, ProductoPedidoJPARepository ppJPARepository, CompraJpaRepo compraRepo, CompraDetalleJpaRepo compraDetalleJpaRepo) {
        this.pedidoRepository = pedidoRepository;
        this.ppJPARepository = ppJPARepository;
        this.compraRepo = compraRepo;
        this.compraDetalleJpaRepo = compraDetalleJpaRepo;
    }

    @Override
    public List<Pedido> findAll() {
        return pedidoRepository.findAll();
    }

    
    
}
