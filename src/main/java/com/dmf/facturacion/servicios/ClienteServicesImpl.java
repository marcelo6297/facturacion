/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.filtros.ClienteFilter;
import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.model.QCliente;
import com.dmf.facturacion.model.QProducto;
import com.dmf.facturacion.repositorios.ClienteJPARepository;
import com.querydsl.core.BooleanBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 *
 * @author marcelo
 * Implementacion de ClienteService
 */
@Service("ClienteService")
public class ClienteServicesImpl implements ClienteServices{
    
    @Autowired
    ClienteJPARepository JpaRepo;

    @Override
    public Iterable<Cliente> filter(ClienteFilter filtro, Pageable pgbl) {
        
        QCliente query = QCliente.cliente;
        BooleanBuilder builder =  new BooleanBuilder();
        
        
        if (filtro.getActivo()!= null ) {
            builder.and(query.activo.eq(filtro.getActivo()));
        }
        if (filtro.getTelefono()!= null && !filtro.getTelefono().isEmpty()) {
            builder.and(query.telefono.containsIgnoreCase(filtro.getTelefono()));
             
        }
        
        if (filtro.getRuc() != null && !filtro.getRuc().isEmpty()) {
            builder.and(query.ruc.containsIgnoreCase(filtro.getRuc()));
             
        }
        if (filtro.getNombre() != null && !filtro.getNombre().isEmpty()) {
            builder.and(query.nombre.containsIgnoreCase(filtro.getNombre()));
             
        }
        if (filtro.getApellido() != null && !filtro.getApellido().isEmpty()) {
            builder.and(query.apellido.containsIgnoreCase(filtro.getApellido()));
        }
        
        if (filtro.getDireccion1()!= null && !filtro.getDireccion1().isEmpty()) {
            builder.and(query.direccion1.containsIgnoreCase(filtro.getDireccion1()));
        }
        
        if (filtro.getFechaNacimiento()!= null && filtro.getFechaNacimiento().isValid()) {
             builder.and(query.fechaNacimiento.between(filtro.getFechaNacimiento().getMin(),
                     filtro.getFechaNacimiento().getMax()));
        }
        
        return JpaRepo.findAll(builder.getValue(), pgbl);
    
    }

    @Override
    public ClienteJPARepository getJpaRepo() {
        return JpaRepo;
    }
    
}
