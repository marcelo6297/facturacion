/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

/**
 * []Agregar la fecha del registro
 *
 * @author marcelo
 */
@Entity
@Table(name = "compra_detalle")
public class CompraDetalle implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "compra_id")
    private Compra compra;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    
    private Producto producto;

    private String codigo;
    private String nombre;
    private String descripcion;
    private Double precioCompra;
    private Integer porcenGan;
    private Double precioVenta;
    private Integer iva;
    private Double cantidad;
    private Double subTotalIva;
    private Double subTotal;

    public CompraDetalle() {
    }

    public CompraDetalle(Long id, Compra compra, Producto producto, String codigo, String nombre, String descripcion, Double precioCompra, Integer procenGan, Double precioVenta, Integer iva, Double cantidad, Double subTotalIva, Double subTotal) {
        this.id = id;
        this.compra = compra;
        this.producto = producto;
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precioCompra = precioCompra;
        this.porcenGan = procenGan;
        this.precioVenta = precioVenta;
        this.iva = iva;
        this.cantidad = cantidad;
        this.subTotalIva = subTotalIva;
        this.subTotal = subTotal;
    }

    public Compra getCompra() {
        return compra;
    }

    public void setCompra(Compra compra) {
        this.compra = compra;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
        this.nombre = producto.getNombre();
        this.codigo = producto.getCodigo();
        this.descripcion = producto.getDescripcion();
        this.iva = producto.getIva();
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

    public Double getPrecioCompra() {
        return precioCompra;
    }

    public void setPrecioCompra(Double precioCompra) {
        this.precioCompra = precioCompra;
    }

    public Integer getPorcenGan() {
        return porcenGan;
    }

    public void setPorcenGan(Integer porcenGan) {
        this.porcenGan = porcenGan;
    }

    public Double getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(Double precioVenta) {
        this.precioVenta = precioVenta;
    }

    public Integer getIva() {
        return iva;
    }

    public void setIva(Integer iva) {
        this.iva = iva;
    }

    public Double getCantidad() {
        return cantidad;
    }

    public void setCantidad(Double cantidad) {
        this.cantidad = cantidad;
    }

    public Double getSubTotalIva() {
        return subTotalIva;
    }

    public void setSubTotalIva(Double subTotalIva) {
        this.subTotalIva = subTotalIva;
    }

    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 
     */
    public void calclularTotal() throws IllegalArgumentException{
        if (porcenGan == null && precioVenta == null){
            throw new IllegalArgumentException("Porentaje ganancia y precio venta no pueden ser nulos");
        }
        if (cantidad == null ){
            throw new IllegalArgumentException("La cantidad no puede ser null");
        }
        if (precioCompra == null ){
            throw new IllegalArgumentException("Precio de compra no puede ser null");
        }
        
        if (porcenGan != null){
            Double pv = (1 + (getPorcenGan() / 100.0)) * getPrecioCompra();
            setPrecioVenta(pv);
        }
        
        
        
        Double subTotalIva = getCantidad() * getPrecioCompra() * getIva() / 100.0;
        setSubTotalIva(subTotalIva);
        
        Double subTotal = getCantidad() * getPrecioCompra() + getSubTotalIva();
        setSubTotal(subTotal);
    }
}
