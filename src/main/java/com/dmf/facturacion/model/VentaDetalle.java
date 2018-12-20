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
    private Integer                 procenDesc  =0;
    private Double                  excentas    =0.0;
    private Double                  iva5        =0.0;
    private Double                  iva10       =0.0;

    public VentaDetalle() {
    }

    public VentaDetalle(Long id, Venta venta, Producto producto, String codigo, String nombre, String descripcion, Double cantidad, Double precio, Integer procenDesc, Double excentas, Double iva5, Double iva10) {
        this.id = id;
        this.venta = venta;
        this.producto = producto;
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
        this.procenDesc = procenDesc;
        this.excentas = excentas;
        this.iva5 = iva5;
        this.iva10 = iva10;
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

    public Integer getProcenDesc() {
        return procenDesc;
    }
    
    public void setProcenDesc(Integer procenDesc) {
        this.procenDesc = procenDesc;
    }

    public Double getExcentas() {
        return excentas;
    }

    public void setExcentas(Double excentas) {
        this.excentas = excentas;
    }

    public Double getIva5() {
        return iva5;
    }

    public void setIva5(Double iva5) {
        this.iva5 = iva5;
    }

    public Double getIva10() {
        return iva10;
    }

    public void setIva10(Double iva10) {
        this.iva10 = iva10;
    }
    /**
     * Metodo que calcula el calor de los impuestos segun 
     * Excentas, Iva5 o Iva10 con el valor del precio y porcenDec
     */
    public void calcularImpuestos() {
        if (this.getProducto() != null) {
            Double valor = this.getCantidad() * precio *(1 - procenDesc /100.0);
            switch (this.getProducto().getIva()) {
                case 0:
                    this.setExcentas(valor);
                    this.setIva5(0.0);
                    this.setIva10(0.0);
                    break;
                case 5:
                    this.setExcentas(0.0);
                    this.setIva5(valor);
                    this.setIva10(0.0);
                    break;
                case 10:
                    this.setExcentas(0.0);
                    this.setIva5(0.0);
                    this.setIva10(valor);
                    break;
                default:
                    break;
            }
        }
    }
    @PrePersist
    public void antesInsert() {
        calcularImpuestos();
    }
}
