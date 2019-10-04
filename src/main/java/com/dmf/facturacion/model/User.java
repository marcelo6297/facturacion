/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import com.dmf.facturacion.security.View;
import com.fasterxml.jackson.annotation.JsonView;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

/**
 *
 * @author marcelo
 */
@Entity
public class User implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true)
    @NotNull
    private String email;
    @Column
    private String nombre;
    @Column
    private String apellido;
    @Column
    private String direccion;
    @Column
    @NotNull
    @JsonView(View.Never.class)
    private String password;
    @Column
    private boolean enabled;
    
    @JsonView(View.Never.class)
    @Column
    private int failedAttempts=0;
    
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    @JsonView(View.Admin.class)
    private Date expireOn = new Date(System.currentTimeMillis() +30*24*60*60*1000);
    
    @OneToMany( fetch = FetchType.LAZY, mappedBy = "user")
    private Set<UserRoles> roles = new HashSet<>();
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
   
    public String getPassword() {
        return password;
    }
    
    /**
     * Se debe encriptar la contrase;a antes de guardar
    */
    public void setPassword(String password) {
        this.password = password;
    }
    
  
    
    public boolean getEnabled() {
        return enabled;
    }
    
    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public User() {
    }

    public Set<UserRoles> getRoles() {
        return roles;
    }

    public void setRoles(Set<UserRoles> roles) {
        this.roles = roles;
    }

    public User(Long id, String email, String nombre, String apellido, String direccion, String password, boolean enabled, int failedAttempts) {
        this.id = id;
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.password = password;
        this.enabled = enabled;
        this.failedAttempts = failedAttempts;
    }



    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getFailedAttempts() {
        return failedAttempts;
    }

    public void setFailedAttempts(int failedAttempts) {
        this.failedAttempts = failedAttempts;
    }

    public Date getExpireOn() {
        return expireOn;
    }

    public void setExpireOn(Date expireOn) {
        this.expireOn = expireOn;
    }
    
    @JsonView(View.Never.class)
    public boolean isAccountNonExpired() {
        return System.currentTimeMillis() < expireOn.getTime();
    }
    
    
}
