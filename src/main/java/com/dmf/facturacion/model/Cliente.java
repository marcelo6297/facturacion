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
@JsonPropertyOrder({"id", "nombre", "descripcion", "precio", "iva" })
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
    private Direccion       direccion;
    private TipoCliente     tipo;
    private Boolean         activo;
    private Date            fechaNacimiento;
    private Date            createdOn = new Date();
    
    
    private Set<Pedido> pedidos;
    
    @Temporal(TemporalType.DATE)
    @Column(name="created_on", updatable=false, nullable=false)
    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date created_on) {
        this.createdOn = created_on;
    }
    
    @JsonIgnore
    @ManyToMany(fetch= FetchType.LAZY, mappedBy="cliente")
    public Set<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(Set<Pedido> pedidos) {
        this.pedidos = pedidos;
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

    public Cliente(Long id, String nombre, String apellido, String ruc, String telefono, Direccion direccion, TipoCliente tipo, Boolean activo, Set<Pedido> pedidos) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ruc = ruc;
        this.telefono = telefono;
        this.direccion = direccion;
        this.tipo = tipo;
        this.activo = activo;
        this.pedidos = pedidos;
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
    
    @Embedded
    public Direccion getDireccion() {
        return direccion;
    }

    public void setDireccion(Direccion direccion) {
        this.direccion = direccion;
    }
    
    

    
 
}


