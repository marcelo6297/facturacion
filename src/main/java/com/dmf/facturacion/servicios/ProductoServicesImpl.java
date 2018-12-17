/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.Compra;
import com.dmf.facturacion.model.CompraDetalle;
import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.repositorios.CompraDetalleJpaRepo;
import com.dmf.facturacion.repositorios.CompraJpaRepo;
import com.dmf.facturacion.repositorios.ProductoJPARepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author marcelo
 */
@Service("ProductoServices")
public class ProductoServicesImpl implements ProductoServices{
    
    ProductoJPARepository productoRepo;
    CompraJpaRepo compraRepo;
    CompraDetalleJpaRepo compraDetalleJpaRepo;

    @Autowired
    public ProductoServicesImpl(ProductoJPARepository productoRepo, CompraJpaRepo compraRepo, CompraDetalleJpaRepo compraDetalleJpaRepo) {
        this.compraRepo = compraRepo;
        this.compraDetalleJpaRepo = compraDetalleJpaRepo;
        this.productoRepo = productoRepo;
    }
    
    
    
    @Override
    public void saveCompra(Compra compra, List<CompraDetalle> detalles) throws NullPointerException{
            //Guarda las Compras
            //Guarda los detalles
            //Actualiza el stock
           
//            Actualizar la compra
            compraRepo.save(compra);
            //Antes de guardar chequear los valores
            for (CompraDetalle det: detalles) {
                //verificar la estrategia de seteado de precio venta
                Double pv = (1 + (det.getProcenGan()/100.0)) * det.getPrecioCompra();
                det.setPrecioVenta( pv );
                Double subTotal = det.getCantidad() * det.getPrecioCompra();
                Double subTotalIva = det.getCantidad() * det.getPrecioCompra()*det.getIva()/100.0;
                det.setSubTotal(subTotal);
                det.setSubTotalIva(subTotalIva);
            }
            compraDetalleJpaRepo.save(detalles);
            productoRepo.updateStock();
    }

    @Override
    public void saveProducto(Producto producto) throws NullPointerException {
        productoRepo.save(producto);
    }

    @Override
    public Producto findById(Long id) {
        return productoRepo.findOne(id);
    }
}
