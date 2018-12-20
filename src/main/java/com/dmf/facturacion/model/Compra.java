/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;

/**
 * Representa una compra hecha a un proveedor, en principio no existe la tabla 
 * proveedores, luego se la agregara para asociarla
 * @author marcelo
 */
@Entity
public class Compra implements Serializable{
    Long                id;
    String              proveedor;
    Date                fechaCompra;
    Double              totalCompra = 0.0;    
    Set<CompraDetalle>  compraDetalles;

    public Compra() {
    }

    public Compra(Long id, String proveedor, Date fechaCompra, Double totalCompra) {
        this.id = id;
        this.proveedor = proveedor;
        this.fechaCompra = fechaCompra;
        this.totalCompra = totalCompra;
    }

    
    
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProveedor() {
        return proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }

    public Date getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(Date fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public Double getTotalCompra() {
        return totalCompra;
    }

    public void setTotalCompra(Double totalCompra) {
        this.totalCompra = totalCompra;
    }
    
    @OneToMany(fetch= FetchType.LAZY, mappedBy="compra")
    public Set<CompraDetalle> getCompraDetalles() {
        return compraDetalles;
    }

    public void setCompraDetalles(Set<CompraDetalle> compraDetalles) {
        this.compraDetalles = compraDetalles;
    }

    @PrePersist
    public void calcularTotal() {
        for(CompraDetalle cd : this.compraDetalles) {
            totalCompra += cd.getSubTotal();
        }
    }
}
