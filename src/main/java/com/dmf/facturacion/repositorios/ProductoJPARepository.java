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
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

/**
 *
 * @author marcelo
 */
@Component
public interface ProductoJPARepository extends JpaRepository<Producto, Long>, QueryDslPredicateExecutor<Producto> {
    
    @Modifying
    @Query(value = "Update producto as p "
            + "SET p.total_ingreso = (SELECT IfNULL(SUM(cd.cantidad),0) "
            + "FROM compra_detalle as cd WHERE cd.producto_id = p.id ),  "
            + "p.total_salida = (SELECT IFNULL(SUM(vd.cantidad),0) "
            + "FROM venta_detalle vd WHERE vd.producto_id = p.id AND vd.estado != 'Anulado'),  "
            + "p.total_stock = p.stock_inicial + p.total_ingreso - p.total_salida , "
            + "p.estado_stock = case \n"
            + "WHEN p.total_stock <= p.stock_pre_orden AND p.total_stock >= p.stock_minimo  THEN 'Minimo'\n"
            + "WHEN p.total_stock < p.stock_minimo  THEN 'Critico'\n"
            + "else 'Normal'\n"
            + "END", 
            nativeQuery = true)
    public void updateStock();
    
    @Query("FROM Producto p WHERE (p.id NOT IN :ids) AND (p.codigo LIKE %:search% OR p.nombre LIKE %:search% )")
    public List<Producto> buscar(@Param("search") String search, @Param("ids") Long... ids);
    @Query("FROM Producto p WHERE (p.codigo LIKE %:search% OR p.nombre LIKE %:search% )")
    public List<Producto> buscar(@Param("search") String search);
    
}
