/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.Compra;
import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.model.Venta;
import com.dmf.facturacion.repositorios.CompraJpaRepo;
import com.dmf.facturacion.repositorios.ProductoJPARepository;
import com.dmf.facturacion.repositorios.VentaDetalleJpaRepo;
import com.dmf.facturacion.repositorios.VentaJpaRepo;
import java.util.List;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Pageable;

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
    public void saveCompra(Compra compra) throws NullPointerException;
    
    public Producto findById(Long id);
    
    public ProductoJPARepository productoRepo();
    
    public VentaJpaRepo ventaJpaRepo();
    
    public VentaDetalleJpaRepo ventaDetJpaRepo();
    
    public CompraJpaRepo compraRepo();
    
    public void saveVenta(Venta venta) throws NullPointerException, IllegalArgumentException;
    
    public void calcularTotalCompra(Compra c);
    
    public void calcularTotalVenta(Venta v);
    
    public void clearDetallesVentas(Long ventaId);
    
    public void updateStock();
    
    public void anularVentas(Long ... ids);
    
//    public List<Producto> filtrar(Example<Producto> p, Pageable pgbl);
}
