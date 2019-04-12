/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.User;
import com.dmf.facturacion.security.JwtProvider;
import com.dmf.facturacion.security.JwtResponse;
import com.dmf.facturacion.servicios.UserServices;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
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
public class UserController {
    
    @Autowired
    UserServices _srvc;
    
    @Autowired
    PasswordEncoder encoder;
    
    @Autowired
    AuthenticationManager authManager;
    
    @RequestMapping()
    public Principal user(Principal user) {
         System.out.println("details> ");
         if (user.getClass() != null) 
             System.out.println(((UsernamePasswordAuthenticationToken)user).getDetails().getClass());
        return user;
    }
    
    @PostMapping("register")
    public User register(@RequestBody User u ){
        
        u.setPassword(encoder.encode(u.getPassword()));
        _srvc.getRepo().save(u);
      return   u;
    }
    
    @PostMapping("login")
    public  ResponseEntity<?> login(@RequestBody User u ){
         Authentication authentication = authManager.authenticate(
        new UsernamePasswordAuthenticationToken(u.getEmail(), u.getPassword()));
          
         
         SecurityContextHolder.getContext().setAuthentication(authentication);
         UserDetails userDetails = (UserDetails) authentication.getPrincipal();
         
         String token = JwtProvider.generateJwtToken(authentication);
        
         return ResponseEntity.ok(new JwtResponse(token, u.getEmail(), 
                 userDetails.getAuthorities()));
         
      
    }
}
