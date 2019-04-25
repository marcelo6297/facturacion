/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.repositorios;

import com.dmf.facturacion.model.User;
import com.dmf.facturacion.model.UserRoles;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author marcelo
 */
@Repository
public interface UserRoleRepository extends CrudRepository<UserRoles, Long> {
    
    //Encontrar un rol en base a un nombre de usuario
    @Query("select a.tipoRol from UserRoles a, User  b where b.email =:email and a.user.id = b.id")
    public List<String> getRolesByUsername(@Param("email") String email);
    
    public void deleteByUser(User u);
}
