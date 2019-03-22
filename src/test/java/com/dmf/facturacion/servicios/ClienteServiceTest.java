/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.model.TipoCliente;
import com.dmf.facturacion.repositorios.ClienteJPARepository;
import java.util.ArrayList;
import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author marcelo
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class ClienteServiceTest {
    
    @Autowired
    ClienteJPARepository clienteRepo;
    
    @Test
    public void guardaClientes(){
        
        List<Cliente> clientes = new ArrayList<>();
        for (int i = 0 ;i<10 ; i++){
        
            Cliente c = new Cliente();
            
            c.setNombre("TEST"+i);
            c.setApellido("Apellido TEST"+i);
            c.setRuc("100200-"+i);
            c.setActivo(true);
            c.setTelefono("098579810"+i);
            
            c.setDireccion1("Direccion 1:"+i);
            c.setDireccion2("Direccion 2:"+i);
            c.setTipo(TipoCliente.MAYORISTA);
            clientes.add(c);
        }
    
        clienteRepo.save(clientes);
    
    }
    
}
