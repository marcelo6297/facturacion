/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.repositorios;

import com.dmf.facturacion.model.Producto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

/**
 *
 * @author marcelo
 */
@Component
public interface ProductoJPARepository extends JpaRepository<Producto, Long>{
    
    @Modifying
    @Query(value = "Update producto as p SET p.total_ingreso = (SELECT IfNULL(SUM(cd.cantidad),0) FROM compra_detalle as cd WHERE cd.producto_id = p.id ),  p.total_salida = (SELECT IFNULL(SUM(vd.cantidad),0) FROM venta_detalle vd WHERE vd.producto_id = p.id ),  p.total_stock = p.stock_inicial + p.total_ingreso - p.total_salida", nativeQuery = true)
    public void updateStock();
    
    @Query("FROM Producto p WHERE p.codigo LIKE %:search% OR p.nombre LIKE %:search% AND p.id NOT IN :ids")
    public List<Producto> buscar(@Param("search") String search, @Param("ids") Long... ids);
    
}
