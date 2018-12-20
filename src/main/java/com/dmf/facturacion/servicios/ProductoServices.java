/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.Compra;
import com.dmf.facturacion.model.CompraDetalle;
import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.model.Venta;
import com.dmf.facturacion.model.VentaDetalle;
import com.dmf.facturacion.repositorios.CompraJpaRepo;
import com.dmf.facturacion.repositorios.ProductoJPARepository;

/**
 *
 * @author marcelo
 */
public interface ProductoServices {
    
    public void saveProducto(Producto producto) throws NullPointerException;
    
    /**
     * Se deve setear el precio segun una estrategia de prioridad, si no tiene
     * seteado precio de venta calcularlo, si tiene ambos valores(precioVenta y procentGan)
     * diferenciar por el valor seteado
     * @param compra
     * @param detalles
     * @throws NullPointerException 
     */
    public void saveCompra(Compra compra, Iterable<CompraDetalle> detalles) throws NullPointerException;
    
    public Producto findById(Long id);
    
    public ProductoJPARepository productoRepo();
    
    public CompraJpaRepo compraRepo();
    
    public void saveVenta(Venta venta, Iterable<VentaDetalle> detalles) throws NullPointerException, IllegalArgumentException;
}
