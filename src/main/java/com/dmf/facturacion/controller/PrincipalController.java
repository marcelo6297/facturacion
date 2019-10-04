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
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marcelo
 * * Para el login se debe contar los intentos fallidos, si supera una cantidad determinada
 * se debe bloquear a la direccion IP,
 * Se debe poder detectar ciertos ataque:
 *      como ser reenvio de formularios login
 *      
 * Debo capturar la excepcion al intentar autenticar y guardar un registro de los intentos
 * fallidos
 * desde esa direccion IP.
 * se po
 */
@RestController
@RequestMapping(value = "api/principal")
public class PrincipalController {
    
    @Autowired
    AuthenticationManager authManager;
    
    @Autowired
    UserServices _srvc;
    
    @PostMapping("login")
    public  ResponseEntity<?> login(@RequestBody User u ){
        
        try {
         Authentication authentication = authManager.authenticate(
        new UsernamePasswordAuthenticationToken(u.getEmail(), u.getPassword()));
          
         
         SecurityContextHolder.getContext().setAuthentication(authentication);
         UserDetails userDetails = (UserDetails) authentication.getPrincipal();
         
         String token = JwtProvider.generateJwtToken(authentication);
         
         User user = _srvc.getRepo().findByEmail(u.getEmail());
         if (user.getFailedAttempts() > 0){
             user.setFailedAttempts(0);
            _srvc.getRepo().save(user);
         }
         
//         if (!user.getEnabled()) {
//             throw new BadCredentialsException("Cuenta bloqueada!!!");
//         }
//         if (!user.isAccountNonExpired()) {
//             throw new BadCredentialsException("Cuenta expirada!!!");
//         }
        
         return ResponseEntity.ok(new JwtResponse(token, u.getEmail(), 
                 userDetails.getAuthorities()));
        }
        catch(AuthenticationException ae){
            User user = _srvc.getRepo().findByEmail(u.getEmail());
            if (user !=null){
                user.setFailedAttempts(user.getFailedAttempts()+1);
                _srvc.getRepo().save(user);
            }
            //Guardar en el log de eventos y tambien la direccion IP
            throw new BadCredentialsException("", ae);
        }
      
    }
    
    @GetMapping
    public Principal principal(Principal p){
        return p;
    }
    
}