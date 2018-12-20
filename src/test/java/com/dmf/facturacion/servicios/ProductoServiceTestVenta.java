/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.CompraDetalle;
import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.model.Venta;
import com.dmf.facturacion.model.VentaDetalle;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author marcelo
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class ProductoServiceTestVenta {
    
    @Autowired
    ProductoServices productoServices;
     
    @Test
    @Transactional
    public void guardarVentaConProducto(){
        
        Venta v = new Venta();
        v.setCliente("Test");
        v.setFechaVenta(new Date());
        v.setCreadoEl(new Date());
        
        List<VentaDetalle> detalles = new ArrayList<>();
        
        //cargar tres valores
        
        List<Producto> productos = productoServices.productoRepo().findAll();
        
        for (Producto p : productos) {
            VentaDetalle vd = new VentaDetalle();
            vd.setVenta(v);
            vd.setProducto(p);
            vd.setCantidad(10.0);
            vd.setPrecio(p.getPrecioVenta());
            

            detalles.add(vd);
        }
        
        productoServices.saveVenta(v, detalles);
        productos = productoServices.productoRepo().findAll();
        for (Producto p : productos) {
            System.out.println("Stock p:" +p.getTotalStock());
        }
    }
    
   
}
