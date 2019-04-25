/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.TipoRol;
import com.dmf.facturacion.model.User;
import com.dmf.facturacion.model.UserRoles;
import com.dmf.facturacion.security.View;
import com.dmf.facturacion.servicios.UserServices;
import com.fasterxml.jackson.annotation.JsonView;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marcelo
 */
@RestController
@RequestMapping(value = "api/user")
@PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
public class UserController {
    
    @Autowired
    UserServices _srvc;
    
    @Autowired
    PasswordEncoder encoder;
    
    @GetMapping
     @JsonView(View.Public.class)
    public Iterable<User> getAll(Pageable pgbl){
        return _srvc.getRepo().findAll(pgbl);
    }
    
    @GetMapping(value = "{userId}")
    @JsonView(View.Public.class)
    public User get(@PathVariable Long userId) {
        
        return _srvc.getRepo().findOne(userId);
    }
   
    
    @PostMapping("register")
    public User register(@RequestBody User u ){
        if (u.getPassword().length()>0) {
            u.setPassword(encoder.encode(u.getPassword()));
        }
        _srvc.getRepo().save(u);
      return   u;
    }
    
    
    
    @GetMapping(value = "admin")
    @JsonView(View.Admin.class)
    public Iterable<User> getAdminAll(Pageable pgbl){
        return _srvc.getRepo().findAll(pgbl);
    }
    
    @GetMapping(value = "/roles")
    public List<TipoRol> allTipos(ModelMap model) {
        System.out.println("Listando los roles\r");
        List<TipoRol> tipos = Arrays.asList(TipoRol.values());
        return tipos;
    }
    
    @PostMapping
    @Transactional
    @JsonView(View.Public.class)
    public ResponseEntity<?> save(@RequestBody User user,BindingResult res){
        if (res.hasErrors()) {
            return ResponseEntity.badRequest().body(res);
        }
        //Es un nuevo usuario, encriptar contraseña
        //List roles a agregar y a remover
        boolean encrypt = false;
        boolean setUser = false;
        if (user.getId() == null ){
            encrypt = true;
           
        }
        else {
            User currentUser = _srvc.getRepo().getOne(user.getId());
            if (user.getPassword().length() != 0) {
                encrypt = true;
            }
            else {
                user.setPassword(currentUser.getPassword());
            }
            List<UserRoles> newRoles = new ArrayList(user.getRoles());
            List<UserRoles> oldRoles = new ArrayList(currentUser.getRoles());
            for (UserRoles newRol : newRoles){
                boolean exist = false;
                for(UserRoles oldRol : oldRoles ) {
                    if (newRol.getTipoRol().equals(oldRol.getTipoRol())) {
                          currentUser.getRoles().remove(oldRol);
                          newRol.setId(oldRol.getId());
                          newRol.setUser(user);
                          exist = true;
                          break;
                    }
                }
                if (!exist) {
                    setUser = true;
                    newRol.setUser(user);
                }
            }
            //clear roles ya no usados
            _srvc.getRolRepo().delete(currentUser.getRoles());
           
        }
        
        if(encrypt) {
            int length = user.getPassword().length();
            if (length >= 6 && length <= 24)   {
                user.setPassword(encoder.encode(user.getPassword()));
            }
            else {
                return ResponseEntity.badRequest().body("el password no "
                        + "tiene las longitud minima y maxima");
            }
        }
        

        
         if (!setUser)
             user.getRoles().forEach(eol->eol.setUser(user));
//        _srvc.getRolRepo().deleteByUser(user);         
        _srvc.getRepo().save(user);
        _srvc.getRolRepo().save(user.getRoles());         

        return ResponseEntity.ok(user);
    
    }
    
    
}
