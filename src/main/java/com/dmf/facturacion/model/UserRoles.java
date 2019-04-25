/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.hibernate.annotations.NaturalId;

/**
 *
 * @author marcelo
 * El rol y el usuario deben ser UNICOS
 */
@Entity()
@Table(name = "roles")
public class UserRoles implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Enumerated(EnumType.STRING)
    private TipoRol tipoRol;
    
    @ManyToOne()
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TipoRol getTipoRol() {
        return tipoRol;
    }

    public void setTipoRol(TipoRol rol) {
        this.tipoRol = rol;
    }
    
    public void setTipoRol(String rol){
        this.tipoRol = TipoRol.valueOf(rol);
    }

    public UserRoles(Long id, TipoRol rol) {
        this.id = id;
        this.tipoRol = rol;
    }

    public UserRoles() {
        tipoRol = TipoRol.USER;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public UserRoles(String rol) {
        
        this.tipoRol = TipoRol.valueOf(rol);
    }

   
   
    
    
    
    
}
