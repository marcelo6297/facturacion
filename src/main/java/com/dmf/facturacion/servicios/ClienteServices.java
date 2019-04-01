/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.filtros.ClienteFilter;
import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.repositorios.ClienteJPARepository;
import org.springframework.data.domain.Pageable;

/**
 *
 * @author marcelo
 */
public interface ClienteServices {
    public Iterable<Cliente> filter(ClienteFilter pf, Pageable pgbl);
    
    public ClienteJPARepository getJpaRepo();
}


