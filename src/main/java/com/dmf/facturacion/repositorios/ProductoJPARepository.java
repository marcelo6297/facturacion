/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.repositorios;

import com.dmf.facturacion.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

/**
 *
 * @author marcelo
 */
@Component
public interface ProductoJPARepository extends JpaRepository<Producto, Long>{
    
    @Modifying
    @Query(value = "Update producto as p set p.total_ingreso = (SELECT sum(cd.cantidad) FROM compra_detalle as cd WHERE cd.producto_id = p.id ), p.total_salida = (SELECT COUNT(vd.cantidad) FROM venta_detalle vd WHERE vd.producto_id = p.id ),p.total_stock = p.stock_inicial + p.total_ingreso", nativeQuery = true)
    public void updateStock();
}
