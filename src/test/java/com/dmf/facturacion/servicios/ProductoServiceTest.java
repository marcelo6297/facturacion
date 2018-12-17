/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.Compra;
import com.dmf.facturacion.model.CompraDetalle;
import com.dmf.facturacion.model.Producto;
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
public class ProductoServiceTest {
    @Autowired
     ProductoServices productoServices;
    
    @Test
    public void guardaProducto(){
        
        Producto p = new Producto(1l, "A001", "Test", "Producto cargado en test", 20.0, 23.0,
                10, 25.0, 20, 20.00, 20.00, 20.00, 20.00, 20.00, 20.00, "Nota cargada en test", Boolean.TRUE);
        productoServices.saveProducto(p);
    }
       
    @Test
    @Transactional
    public void guardarCompraConProducto(){
        
        Producto p = productoServices.findById(4l);
        Compra c = new Compra();
        c.setProveedor("Test");
        c.setFechaCompra(new Date());
        
        List<CompraDetalle> detalles = new ArrayList<>();
        
        CompraDetalle cd = new CompraDetalle();
        cd.setCompra(c);
        cd.setProducto(p);
        cd.setCantidad(10.0);
        cd.setPrecioCompra(20.0);
        cd.setIva(10);
        cd.setProcenGan(25);
        
        detalles.add(cd);
        
        productoServices.saveCompra(c, detalles);
        
        
    }
    
    
    
    
    
}
