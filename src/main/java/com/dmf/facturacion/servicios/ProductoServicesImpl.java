/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.filtros.ProductoFilter;
import com.dmf.facturacion.model.Compra;
import com.dmf.facturacion.model.CompraDetalle;
import com.dmf.facturacion.model.EstadoFact;
import com.dmf.facturacion.model.EstadoStock;
import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.model.QProducto;
import com.dmf.facturacion.model.Venta;
import com.dmf.facturacion.model.VentaDetalle;
import com.dmf.facturacion.repositorios.CompraDetalleJpaRepo;
import com.dmf.facturacion.repositorios.CompraJpaRepo;
import com.dmf.facturacion.repositorios.ProductoJPARepository;
import com.dmf.facturacion.repositorios.VentaDetalleJpaRepo;
import com.dmf.facturacion.repositorios.VentaJpaRepo;
import com.querydsl.core.BooleanBuilder;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional
    public void saveCompra(Compra compra) throws NullPointerException{
            //Guarda las Compras
            //Guarda los detalles
            //Actualiza el stock
           
//            Actualizar la compra
            //Antes de guardar chequear los valores
            //Lista de productos a actualizar precios;
            this.calcularTotalCompra(compra);
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
    public Producto findById(Long id) {
        return productoRepo.findOne(id);
    }

    @Override
    @Transactional
    public void saveVenta(Venta venta) throws NullPointerException, IllegalArgumentException {
        Set<VentaDetalle> detalles = venta.getVentaDetalles();
        for (VentaDetalle det: detalles) {
            
            if (det.getCantidad() > productoRepo.findOne(det.getProducto().getId()).getTotalStock()) {
                //guardar un registro de auditoria del evento
                throw new IllegalArgumentException("La cantidad Supera al Stock, producto: "+det.getNombre());
            }
            det.setEstado(EstadoFact.Pendiente);
        }
        this.calcularTotalVenta(venta);
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
    public void calcularTotalCompra(Compra c) {
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
        c.setTotalExentas(totalExcentas);
        c.setTotalIva5(totalIva5);
        c.setTotalIva10(totalIva10);
        c.setTotalGeneral(totalExcentas+totalIva5+totalIva10);
    }    

    @Override
    public VentaJpaRepo ventaJpaRepo() {
        return this.ventaRepo;
    }

    @Override
    public void calcularTotalVenta(Venta v) {
        System.out.println("ProductoServiceImpl.calcularTotales");
        Double totalExcentas = 0.0, totalIva5= 0.0, totalIva10 = 0.0, 
                totalDesc=0.0;
        for(VentaDetalle det : v.getVentaDetalles()) {
            det.setVenta(v);
            det.calcularTotal();
            totalDesc += det.getMontoDesc();
            switch(det.getPorcenIva() ) {
                case 0: totalExcentas += det.getSubTotal();
                        break;
                case 5: totalIva5 += det.getSubTotal()+det.getMontoIva();
                        break;
                case 10: totalIva10 += det.getSubTotal()+det.getMontoIva();
                        break;
            
            }
        }
        v.setTotalDesc(totalDesc);
        v.setTotalExentas(totalExcentas);
        v.setTotalIva5(totalIva5);
        v.setTotalIva10(totalIva10);
        v.setTotalGeneral(totalExcentas+totalIva5+totalIva10);
    
    }

    @Override
    public VentaDetalleJpaRepo ventaDetJpaRepo() {
        return this.ventaDetalleRepo;
    
    }

    @Override
    @Transactional
    public void clearDetallesVentas(Long ventaId) {
        this.ventaDetalleRepo.deleteByVentaId(ventaId); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    @Transactional
    public void updateStock() {
        this.productoRepo.updateStock();
    }

    @Override
    @Transactional
    public void anularVentas(Long... ids) {
        ventaJpaRepo().updateVenta(EstadoFact.Anulado.name(), ids);
        ventaDetJpaRepo().updateVenta(EstadoFact.Anulado.name(), ids);
    }

    @Override
    public Iterable<Producto> filter(ProductoFilter filtro, Pageable pgbl) {
        
        if (filtro == null) {
           return productoRepo.findAll(pgbl);
        }
    
        QProducto qp = QProducto.producto;
        BooleanBuilder builder =  new BooleanBuilder();
        
       
        if (filtro.getEstaActivo() != null ) {
            builder.and(qp.activo.eq(filtro.getEstaActivo()));
        }
        if (filtro.getNombre() != null && !filtro.getNombre().isEmpty()) {
            builder.and(qp.nombre.containsIgnoreCase(filtro.getNombre()));
             
        }
        if (filtro.getCodigo() != null && !filtro.getCodigo().isEmpty()) {
            builder.and(qp.codigo.containsIgnoreCase(filtro.getCodigo()));
        }
        
        if (filtro.getEstadoStock()!= null && !filtro.getEstadoStock().isEmpty()) {
            EstadoStock es = EstadoStock.valueOf(filtro.getEstadoStock());
            builder.and(qp.estadoStock.eq(es));
        }
       
        if (filtro.getPrecioCompra()!= null && filtro.getPrecioCompra().isValid()) {
            builder.and(qp.precioCompra.between(filtro.getPrecioCompra().getMin(),
                    filtro.getPrecioCompra().getMax()));
        }

        if (filtro.getPrecioVenta()!= null && filtro.getPrecioVenta().isValid()) {
            builder.and(qp.precioVenta.between(filtro.getPrecioVenta().getMin(),
                    filtro.getPrecioVenta().getMax()));
        }
        if (filtro.getTotalStock()!= null && filtro.getTotalStock().isValid()) {
             builder.and(qp.totalStock.between(filtro.getTotalStock().getMin(),
                     filtro.getTotalStock().getMax()));
        }       

        return productoRepo.findAll(builder.getValue(), pgbl);
    }
    
}
