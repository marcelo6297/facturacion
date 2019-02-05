/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.model.Venta;
import com.dmf.facturacion.model.VentaDetalle;
import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

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
        
        Integer[] iva = new Integer[] {0,5,10,10}; 
        
        for (int i = 0 ;i<4 ; i++){
        
            Producto p = new Producto();
            p.setCodigo("A00"+i);
            p.setNombre("TEST"+i);
            p.setDescripcion("Descripcion TEST"+i);
            p.setPrecioCompra(100.0);
            p.setPorcenGan(10);
            
            p.setPorcenIva(iva[i]);
            p.setStockInicial(10.0);
            Double pv = (1 + (p.getPorcenGan()/100.0)) * p.getPrecioCompra();
            p.setPrecioVenta(pv);
            p.setActivo(Boolean.TRUE);
            productoServices.saveProducto(p);
        
        }
    
    
    }
    
    @Test
    public void VentaDetalleTest(){
        Producto p = new Producto();
        p.setPrecioVenta(15.0);
        p.setPorcenIva(10);
        Venta v = new Venta();
        v.setCliente("Test");
        
        VentaDetalle vd = new VentaDetalle();
        vd.setVenta(v);
        //Valores enteros de descuentos
        vd.setPorcenDesc(10);
        vd.setProducto(p);
        vd.setCantidad(30.0);
        vd.setPrecio(p.getPrecioVenta());
        
        vd.calcularImpuestos();
        
       
        assertEquals(10,vd.getPorcenIva(), 0.01);
        assertEquals(45.0,vd.getMontoIva(), 0.01);
        
        p.setPorcenIva(5);
         vd.setProducto(p);
        vd.calcularImpuestos();
        
        assertEquals(405.0,vd.getMontoIva(), 0.01);
        
        
        p.setPorcenIva(0);
        vd.setProducto(p);
        vd.calcularImpuestos();
        assertEquals(0.0,vd.getMontoIva(), 0.01);
        
    }
       
    
    
    
    
    
    
}
