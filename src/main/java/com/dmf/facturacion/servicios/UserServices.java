/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.User;
import com.dmf.facturacion.repositorios.UserRepository;
import com.dmf.facturacion.repositorios.UserRoleRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author marcelo
 */
@Service("UserService")
public class UserServices implements UserDetailsService{
    
    private UserRepository userRepository;
    private UserRoleRepository userRoleRepository;
    
    
    
    

    @Override
    public UserDetails loadUserByUsername(String string) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(string);
        List<String> userRoles = userRoleRepository.getRolesByUsername(string);
        if (user == null) {
            throw new UsernameNotFoundException("El correo ingresado no existe!!!");
        }
        else {
            return new CustomUserDetails(user, userRoles);
        }
        
        
    }

    @Autowired
    public UserServices(UserRepository userRepository, UserRoleRepository userRoleRepository) {
        this.userRepository = userRepository;
        this.userRoleRepository = userRoleRepository;
    }
    
}
