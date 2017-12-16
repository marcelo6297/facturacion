/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.*;

/**
 *
 * @author marcelo
 */
@Entity
@Table(name="productos_pedidos")
public class ProductoPedido implements Serializable {
    
    
    private Long        id;
    private String      nombreProducto;
    private Double      precio;
    private Integer     iva;
    private Double      cantidad;
    private Double      subTotalIva;
    private Double      subTotal;
    private Pedido      pedido;
    private Producto    producto;

    public ProductoPedido(Long id, String nombreProducto, Double precio, Integer iva, Double cantidad, Double subTotalIva, Double subTotal, Pedido pedido, Producto producto) {
        this.id = id;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.iva = iva;
        this.cantidad = cantidad;
        this.subTotalIva = subTotalIva;
        this.subTotal = subTotal;
        this.pedido = pedido;
        this.producto = producto;
    }

    public ProductoPedido() {
    }
    
    @Column(nullable = false)
    public Double getCantidad() {
        return cantidad;
    }

    public void setCantidad(Double cantidad) {
        this.cantidad = cantidad;
    }
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name="iva", nullable=false)
    public Integer getIva() {
        return iva;
    }

    public void setIva(Integer iva) {
        this.iva = iva;
    }
    
    @Column(name="nombre_producto", length=2000, nullable=false)
    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }
    
    @ManyToOne
    @JsonIgnore
    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }
    
    @Column(name="precio", nullable=false)
    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
    
    @ManyToOne
    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
        if (producto.getNombre()  == null) {return ;}
        this.nombreProducto = producto.getNombre();
        if (producto.getPrecio()== null) {return ;}
        this.precio = producto.getPrecio();
        if (producto.getIva()== null) {return ;}
        this.iva = producto.getIva();
    }
    
    @Column(name="sub_total", nullable=false)
    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }
    
    @Column(name="sub_total_iva", nullable=false)
    public Double getSubTotalIva() {
        return subTotalIva;
    }

    public void setSubTotalIva(Double subTotalIva) {
        this.subTotalIva = subTotalIva;
    }
    
    /**
     * Metodo para calcular los subtotales
     */
    public void calcularSubTotales(){
        Double totalIva = getCantidad() * getIva() * getPrecio() / 100;
        setSubTotalIva(totalIva);
        Double subTotalL = getCantidad() *  getPrecio() + getSubTotalIva();
        setSubTotal(subTotalL);
    }
    
}
