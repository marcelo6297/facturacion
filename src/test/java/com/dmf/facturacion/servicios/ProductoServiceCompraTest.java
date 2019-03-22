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
import static org.junit.Assert.assertEquals;
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
public class ProductoServiceCompraTest {
    @Autowired
    ProductoServices productoServices;
    
    @Test
    @Transactional
    public void guardarCompraConProducto(){
        
        
        Compra c = new Compra();
        c.setProveedor("TEST");
        c.setFechaCompra(new Date());
        
        List<CompraDetalle> detalles = new ArrayList<>();
        
        List<Producto> productos = productoServices.productoRepo().findAll();
        int i = 1;
        for (Producto p : productos) {
        
            CompraDetalle cd = new CompraDetalle();
            cd.setCompra(c);
            cd.setProducto(p);
            cd.setCantidad(10.0);
            cd.setPrecioCompra(20.0);
            cd.setPorcenIva(p.getPorcenIva());
            cd.setPorcenGan(25);
            cd.calclularTotal();
            detalles.add(cd);
            i++;
        }
        
        productoServices.saveCompra(c);
        
        
    }
    
     /**
     * Testear la asignacion de precios de venta
     */
    @Test
    public void precioVentaTest() {
         List<CompraDetalle> detalles = new ArrayList<>();
        List<Producto> productos = productoServices.productoRepo().findAll();
        int i = 0;
        Double[] precios =          new Double[] {100.0,98.0,1500.0,10.0};
        Double[] valoresEsperados = new Double[] {100.0,117.6,2025.0,14.5};
        Integer[] porcenGan = new Integer[] {null,null,null,null};
        for (Producto p : productos) {
        
            CompraDetalle cd = new CompraDetalle();

            cd.setProducto(p);
            cd.setCantidad(10.0);
            cd.setPrecioCompra(precios[i]);
            cd.setPrecioVenta(precios[i]);
            cd.setPorcenIva(p.getPorcenIva());
            cd.setPorcenGan(porcenGan[i]);
            cd.calclularTotal();
            detalles.add(cd);
            i++;
        }
        i=0;
        for (CompraDetalle det: detalles){
            assertEquals(det.getPrecioVenta(),valoresEsperados[i], 0.01);
            i++;
        }
    }
}
