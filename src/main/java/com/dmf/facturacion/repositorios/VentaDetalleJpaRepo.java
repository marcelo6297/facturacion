/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.repositorios;

import com.dmf.facturacion.model.VentaDetalle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author marcelo
 */
public interface VentaDetalleJpaRepo extends JpaRepository<VentaDetalle, Long>{
    
    
    public void deleteByVentaId(Long ventaId);
    
    @Modifying
    @Query(value = "Update venta_detalle as vd SET vd.estado = :p1 WHERE vd.venta_id IN :p2", nativeQuery = true)
    public void updateVenta(@Param("p1") String search, @Param("p2") Long... ids);
    
}
