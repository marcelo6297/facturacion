/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.filtros.ProductoFilter;
import com.dmf.facturacion.filtros.Range;
import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.model.Venta;
import com.dmf.facturacion.model.VentaDetalle;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
        Double[]  pc  = new Double[] {100.0,120.0,130.0,150.0,165.0,300.0,500.0}; 
        
        for (int i = 0 ;i<100 ; i++){
        
            Producto p = new Producto();
            p.setCodigo("A00"+i);
            p.setNombre("TEST"+i);
            p.setDescripcion("Descripcion TEST"+i);
            p.setPrecioCompra(pc[i%6]);
            p.setPorcenGan(10);
            
            p.setPorcenIva(iva[i%4]);
            p.setStockInicial(10.0);
            Double pv = (1 + (p.getPorcenGan()/100.0)) * p.getPrecioCompra();
            p.setPrecioVenta(pv);
            p.setActivo(Boolean.TRUE);
            try {
                productoServices.productoRepo().save(p);
            
            }
            catch (Exception e) {
                System.out.println("error: en guardar");
                System.out.println(e.toString());
            }
        
        }
    
    
    }
    
    @Test
    public void VentaDetalleTest(){
        Producto p = new Producto();
        p.setPrecioVenta(15.0);
        p.setPorcenIva(10);
        Venta v = new Venta();
       Cliente c = new Cliente();
        v.setCliente(c);
        
        VentaDetalle vd = new VentaDetalle();
        vd.setVenta(v);
        //Valores enteros de descuentos
        vd.setPorcenDesc(10);
        vd.setProducto(p);
        vd.setCantidad(30.0);
        vd.setPrecio(p.getPrecioVenta());
        
        vd.calcularTotal();
        
       
        assertEquals(10,vd.getPorcenIva(), 0.01);
        assertEquals(45.0,vd.getMontoIva(), 0.01);
        
        p.setPorcenIva(5);
         vd.setProducto(p);
        vd.calcularTotal();
        
        assertEquals(405.0,vd.getMontoIva(), 0.01);
        
        
        p.setPorcenIva(0);
        vd.setProducto(p);
        vd.calcularTotal();
        assertEquals(0.0,vd.getMontoIva(), 0.01);
        
    }
       
    /**
     * Se desea probar como funciona el filtro
     * probar con filtro null
     * con cada uno de los campos en null y luego con valores
     * 
     */
    @Test
    public void FilterTest(){
        ProductoFilter filtro = new ProductoFilter();
        String nombre = "Test", codigo = "A001";
        Range<Double> precioVenta = new Range<>(65.0, 135.0), precioCompra = null,totalStock;
        Pageable pgbl = new PageRequest(0, 20);
        List<Producto> result = new ArrayList();
        
//        primera prueba es solo setear el codigo
        productoServices.filter(null, pgbl).iterator().forEachRemaining(result::add);
        assertEquals(20, result.size());

//      Segundo test  
        result.clear();
        filtro.setCodigo(codigo);
        productoServices.filter(filtro, pgbl).iterator().forEachRemaining(result::add);
        assertEquals(11, result.size());
        
//        segunda prueba es setear el nombre
        result.clear();
        filtro.setCodigo(null);
        filtro.setNombre(nombre);
        productoServices.filter(filtro, pgbl).iterator().forEachRemaining(result::add);
        assertEquals(20, result.size());
//
        result.clear();
        filtro.setCodigo(null);
        filtro.setNombre(null);
        filtro.setPrecioCompra(precioCompra);
        productoServices.filter(filtro, pgbl).iterator().forEachRemaining(result::add);
        assertEquals(20, result.size());
        
        result.clear();
        filtro.setCodigo(null);
        filtro.setNombre(null);
        filtro.setPrecioVenta(precioVenta);
        productoServices.filter(filtro, pgbl).iterator().forEachRemaining(result::add);
        assertEquals(20, result.size());
        

//      Ahora uno de los valores sera null del rango  
        result.clear();
        precioVenta.setMax(null);
        filtro.setPrecioVenta(precioVenta);
        productoServices.filter(filtro, pgbl).iterator().forEachRemaining(result::add);
        assertEquals(20, result.size());
        
        
        
        
    }
    
    @Test
    public void RangeTest() {
        Range<Double> precioVenta = new Range<>(null, null);
        
        assertEquals(Boolean.FALSE, precioVenta.isValid());
        
        precioVenta.setMin(1.0);        
        assertEquals(Boolean.TRUE, precioVenta.isValid());        
        
    }
    
    
    
    
}
