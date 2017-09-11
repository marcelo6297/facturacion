/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author marcelo
 */
@Entity
@XmlRootElement
public class Tipo implements Serializable {
    
    
    private Long            id;
    private String          nombre;
    private Date            createdOn;

    public Tipo(Long id, String nombre, Date createdOn) {
        this.id = id;
        this.nombre = nombre;
        this.createdOn = createdOn;
    }

    @Override
    public String toString() {
        return  nombre ;
    }

    public Tipo() {
    }

    
    @Temporal(TemporalType.DATE)
    @Column(name="created_on", updatable=false, nullable=false)
    public Date getCreatedOn() {
        return createdOn;
    }
    
    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
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
    
    
    
        
}
