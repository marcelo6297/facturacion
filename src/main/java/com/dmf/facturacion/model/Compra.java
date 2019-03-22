/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

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
import javax.persistence.PreUpdate;

/**
 * Representa una compra hecha a un proveedor, en principio no existe la tabla 
 * proveedores, luego se la agregara para asociarla
 * @author marcelo
 */
@Entity
public class Compra implements Serializable{
    Long                id;
    String              proveedor;
    Date                fechaCompra = new Date();
    
    Double              totalExentas = 0.0;    
    Double              totalIva5 = 0.0;    
    Double              totalIva10 = 0.0;    
    Double              totalGeneral = 0.0;
         
    Set<CompraDetalle>  compraDetalles;    

    public Double getTotalGeneral() {
        return totalGeneral;
    }

    public void setTotalGeneral(Double totalGeneral) {
        this.totalGeneral = totalGeneral;
    }

    public Double getTotalExentas() {
        return totalExentas;
    }

    public void setTotalExentas(Double totalExentas) {
        this.totalExentas = totalExentas;
    }

    public Double getTotalIva5() {
        return totalIva5;
    }

    public void setTotalIva5(Double totalIva5) {
        this.totalIva5 = totalIva5;
    }

    public Double getTotalIva10() {
        return totalIva10;
    }

    public void setTotalIva10(Double totalIva10) {
        this.totalIva10 = totalIva10;
    }
    

    public Compra() {
    }

    public Compra(Long id, String proveedor, Date fechaCompra, Double totalCompra) {
        this.id = id;
        this.proveedor = proveedor;
        this.fechaCompra = fechaCompra;
       
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
    
   
    
    @OneToMany(fetch= FetchType.LAZY, mappedBy="compra")
    public Set<CompraDetalle> getCompraDetalles() {
        return compraDetalles;
    }

    public void setCompraDetalles(Set<CompraDetalle> compraDetalles) {
        this.compraDetalles = compraDetalles;
    }

    
    public void calcularTotales() {
        for(CompraDetalle cd : this.compraDetalles) {
            switch(cd.getPorcenIva() ) {
                case 0: totalExentas += cd.getSubTotal();
                        break;
                case 5: totalIva5 += cd.getSubTotal()+cd.getMontoIva();
                        break;
                case 10: totalIva10 += cd.getSubTotal()+cd.getMontoIva();
                        break;
            
            }
        }
        totalGeneral = totalExentas+totalIva5+totalIva10;
    }
}
