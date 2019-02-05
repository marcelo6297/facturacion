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
import com.dmf.facturacion.repositorios.CompraDetalleJpaRepo;
import com.dmf.facturacion.repositorios.CompraJpaRepo;
import com.dmf.facturacion.repositorios.ProductoJPARepository;
import com.dmf.facturacion.repositorios.VentaDetalleJpaRepo;
import com.dmf.facturacion.repositorios.VentaJpaRepo;
import java.util.ArrayList;
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
    VentaJpaRepo ventaRepo;
    VentaDetalleJpaRepo ventaDetalleRepo;

    
   
    
    
    
    @Override
    public void saveCompra(Compra compra) throws NullPointerException{
            //Guarda las Compras
            //Guarda los detalles
            //Actualiza el stock
           
//            Actualizar la compra
            //Antes de guardar chequear los valores
            //Lista de productos a actualizar precios;
            this.calcularTotales(compra);
            if (compra.getId() != null) {
                System.out.println("editar");
                compraDetalleJpaRepo.deleteByCompra(compra);
            }
            else{
                System.out.println("nuevo");
            
            }
            compraRepo.save(compra);
            compraDetalleJpaRepo.save(compra.getCompraDetalles());
            //Actualizar los precios de los productos modificados y auditar
            
            productoRepo.updateStock();
    }
    
    @Autowired
    public ProductoServicesImpl(ProductoJPARepository productoRepo, CompraJpaRepo compraRepo, CompraDetalleJpaRepo compraDetalleJpaRepo, VentaJpaRepo ventaRepo, VentaDetalleJpaRepo ventaDetalleRepo) {
        this.productoRepo = productoRepo;
        this.compraRepo = compraRepo;
        this.compraDetalleJpaRepo = compraDetalleJpaRepo;
        this.ventaRepo = ventaRepo;
        this.ventaDetalleRepo = ventaDetalleRepo;
    }

    @Override
    public void saveProducto(Producto producto) throws NullPointerException {
        productoRepo.save(producto);
    }

    @Override
    public Producto findById(Long id) {
        return productoRepo.findOne(id);
    }

    @Override
    public void saveVenta(Venta venta, Iterable<VentaDetalle> detalles) throws NullPointerException, IllegalArgumentException {
            for (VentaDetalle det: detalles) {
                if (det.getCantidad() > det.getProducto().getTotalStock()) {
                    throw new IllegalArgumentException("La cantidad Supera al Stock, producto: "+det.getNombre());
                }
            }
            ventaRepo.save(venta);
            ventaDetalleRepo.save(detalles);
            productoRepo.updateStock();
    }

    @Override
    public ProductoJPARepository productoRepo() {
        return this.productoRepo;
    }

    @Override
    public CompraJpaRepo compraRepo() {
        return this.compraRepo;
    }

    @Override
    public void calcularTotales(Compra c) {
        System.out.println("ProductoServiceImpl.calcularTotales");
        Double totalExcentas = 0.0, totalIva5= 0.0, totalIva10 = 0.0;
        for(CompraDetalle cd : c.getCompraDetalles()) {
            cd.setCompra(c);
            cd.calclularTotal();
            switch(cd.getPorcenIva() ) {
                case 0: totalExcentas += cd.getSubTotal();
                        break;
                case 5: totalIva5 += cd.getSubTotal()+cd.getMontoIva();
                        break;
                case 10: totalIva10 += cd.getSubTotal()+cd.getMontoIva();
                        break;
            
            }
        }
        c.setTotalExcentas(totalExcentas);
        c.setTotalIva5(totalIva5);
        c.setTotalIva10(totalIva10);
        c.setTotalGeneral(totalExcentas+totalIva5+totalIva10);
    }    
    
}
