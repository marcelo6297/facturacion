/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.repositorios;

import com.dmf.facturacion.model.CompraDetalle;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author marcelo
 */
public interface CompraDetalleJpaRepo extends JpaRepository<CompraDetalle, Long>{
    
}
