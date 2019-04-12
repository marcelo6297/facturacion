/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.UserRoles;
import com.dmf.facturacion.model.TipoRol;
import com.dmf.facturacion.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author marcelo
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class UserTest {
    
    @Autowired
    UserServices srvc;
    
    @Autowired
    PasswordEncoder passEncod;
            
    @Test 
    public void createRol(){
        
        
        
    }
    
    @Test
    public void createUser(){
        
        
        UserRoles rol = new UserRoles();
        User u = new User(null, "admin@gmail.com", "admin", "admin", "sin direccion", passEncod.encode("admin"), 1, null);
        
        srvc.getRepo().save(u);
        rol.setTipoRol(TipoRol.USER);
        rol.setUser(u);
        srvc.getRolRepo().save(rol);
    }
}
