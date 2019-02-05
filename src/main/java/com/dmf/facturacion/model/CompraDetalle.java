/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
    private Integer porcenIva;
    private Double cantidad;
    private Double montoIva;
    private Double subTotal;

    public CompraDetalle() {
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


    public Double getCantidad() {
        return cantidad;
    }

    public void setCantidad(Double cantidad) {
        this.cantidad = cantidad;
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
        System.out.println("CompraDetalle.calcularTotales");
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
        
        subTotal = getCantidad() * getPrecioCompra() ;
        montoIva = getCantidad() * getPrecioCompra() * porcenIva / 100.0;
         
        
//        comentado el 2019-02-02
//        switch (getIva()) {
//                case 0:
//                    this.setExcentas(getCantidad() * getPrecioCompra());
//                    this.setIva5(0.0);
//                    this.setIva10(0.0);
//                    break;
//                case 5:
//                    this.setExcentas(0.0);
//                    this.setIva5(valor);
//                    this.setIva10(0.0);
//                    break;
//                case 10:
//                    this.setExcentas(0.0);
//                    this.setIva5(0.0);
//                    this.setIva10(valor);
//                    break;
//                default:
//                    break;
//            }
        
        
    }

    
    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }

    public Integer getPorcenIva() {
        return porcenIva;
    }

    public void setPorcenIva(Integer porcenIva) {
        this.porcenIva = porcenIva;
    }

    public Double getMontoIva() {
        return montoIva;
    }

    public void setMontoIva(Double montoIva) {
        this.montoIva = montoIva;
    }
    
    
    
    
}
