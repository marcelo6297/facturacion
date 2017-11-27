/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.repositorios;

import com.dmf.facturacion.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author marcelo
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    public User findByEmail(String email);
    
}
