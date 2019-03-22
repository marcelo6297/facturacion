/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author marcelo
 * Crear un cliente
 */
@Entity
@XmlRootElement
@JsonPropertyOrder({"id", "nombre", "apellido", "ruc", "direccion1", "direccion2","telefono", "tipo" , "activo", "fechaNacimiento", "createdOn"})
public class Cliente implements Serializable {

    @Temporal(TemporalType.DATE)
    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
    
    
    private Long            id;
    private String          nombre;
    private String          apellido;
    private String          ruc;
    private String          telefono;
   
    private String          direccion1;
    private String          direccion2;

    public String getDireccion1() {
        return direccion1;
    }

    public void setDireccion1(String direccion1) {
        this.direccion1 = direccion1;
    }

    public String getDireccion2() {
        return direccion2;
    }

    public void setDireccion2(String direccion2) {
        this.direccion2 = direccion2;
    }
    private TipoCliente     tipo;
    private Boolean         activo;
    private Date            fechaNacimiento;
    private Date            createdOn = new Date();
    
    
    @Temporal(TemporalType.DATE)
    @Column(name="created_on", updatable=false, nullable=false)
    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date created_on) {
        this.createdOn = created_on;
    }
    

    

    public Cliente() {
    }
    
   
    @Column(name="apellido")
    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

       
    
    @Id
    @GeneratedValue( strategy= GenerationType.IDENTITY)
    @Column(name="id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name="nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
    @Enumerated(EnumType.STRING)
    public TipoCliente getTipo() {
        return tipo;
    }

    public void setTipo(TipoCliente tipo) {
        this.tipo = tipo;
    }
    
    @Column
    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

   
    
    @Column(nullable = false, unique = true)
    public String getRuc() {
        return ruc;
    }

    public void setRuc(String ruc) {
        this.ruc = ruc;
    }
    
    @Column
    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

 
 
}


