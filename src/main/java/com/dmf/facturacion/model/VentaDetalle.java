/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

/**
 *
 * @author marcelo
 *
 */

@Entity
@Table(name = "venta_detalle")
public class VentaDetalle implements Serializable{
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long                    id;
    
    @ManyToOne
    @JoinColumn(name="venta_id")
    private Venta                   venta;
    @ManyToOne
    @JoinColumn(name="producto_id")
    private Producto                producto;
    
    private String                  codigo;
    private String                  nombre;
    private String                  descripcion;
    
    
    private Double                  cantidad    =0.0;
    private Double                  precio      =0.0;
    private Integer                 porcenDesc  =0;
    private Integer                 porcenIva  =0;
    private Double                  montoIva       =0.0;
    private Double                  subTotal       =0.0;

    public VentaDetalle() {
    }

    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Venta getVenta() {
        return venta;
    }

    public void setVenta(Venta venta) {
        this.venta = venta;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
        this.nombre = producto.getNombre();
        this.codigo = producto.getCodigo();
        this.descripcion = producto.getDescripcion();
        this.porcenIva = producto.getPorcenIva();
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getCantidad() {
        return cantidad;
    }

    public void setCantidad(Double cantidad) {
        this.cantidad = cantidad;
    }

    public Double getPrecio() {
        return precio;
    }
    
    //Al setear precio se setean varios parametros mas
    public void setPrecio(Double precio) {
        this.precio = precio;
        
        
        
    }

    public Integer getPorcenDesc() {
        return porcenDesc;
    }
    
    public void setPorcenDesc(Integer procenDesc) {
        this.porcenDesc = procenDesc;
    }

    public Integer getPorcenIva() {
        return porcenIva;
    }

    public void setPorcenIva(Integer procenIva) {
        this.porcenIva = procenIva;
    }

    public Double getMontoIva() {
        return montoIva;
    }

    public void setMontoIva(Double montoIva) {
        this.montoIva = montoIva;
    }

    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }

    
    /**
     * Metodo que calcula el calor de los impuestos segun 
     * Excentas, Iva5 o Iva10 con el valor del precio y porcenDec
     */
    public void calcularImpuestos() {
        if (this.getProducto() != null) {
            subTotal = getCantidad() * getPrecio();
            montoIva = getCantidad() * getPrecio() * this.porcenIva / 100.0;
        }
    }
    @PrePersist
    public void antesInsert() {
        calcularImpuestos();
    }
}
