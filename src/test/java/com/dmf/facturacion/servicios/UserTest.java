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
        User u = new User(null, "admin@gmail.com", "admin", "admin", "sin direccion", passEncod.encode("admin"), true, 0);
        
        srvc.getRepo().save(u);
        rol.setTipoRol(TipoRol.USER);
        rol.setUser(u);
        srvc.getRolRepo().save(rol);
        
        u = new User(null, "admin@admin.com", "admin", "admin", "sin direccion", passEncod.encode("admin"), true, 0);
        UserRoles rol2 = new UserRoles();
        srvc.getRepo().save(u);
        rol2.setTipoRol(TipoRol.ADMIN);
        rol2.setUser(u);
        srvc.getRolRepo().save(rol2);
        
    }
}
