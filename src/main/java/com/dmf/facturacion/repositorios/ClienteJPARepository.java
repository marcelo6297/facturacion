/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.repositorios;

/**
 *
 * @author marcelo
 */

import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.model.Tipo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


//@PersistenceUnit(name = "partediarioPU")
@Repository
public interface ClienteJPARepository extends JpaRepository<Cliente, Long>{
    
    @Query("From Tipo t")
    public List<Tipo> findTipoAll();
  
}
