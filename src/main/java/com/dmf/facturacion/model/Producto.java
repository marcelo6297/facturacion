/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.Size;
import org.hibernate.validator.constraints.NotBlank;

/**
 * 
 * @author marcelo
 * Debe poder filtrarse por categoria
 */
@Entity

public class Producto implements Serializable {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long                    id;
    
    @Column(unique = true, nullable = false)
    private String                  codigo;
    
    @Column(nullable = false)
    @NotBlank(message = "El campo esta en blanco")
    private String                  nombre;
    
    @Size(min = 3, max = 1024, message = "La longitud del texto esta fuera del rango")
    private String                  descripcion;
    
    private String                  notas;
    private Boolean                 activo;
    
    private Double                  precioCompra   = 0.0;
    private Integer                 porcenGan      = 35;
    private Double                  precioVenta    = 0.0;
    private Integer                 porcenIva            = 0;
    private Integer                 porcenDesc            = 0;
    
    private Double                  stockInicial   = 0.0;
    private Double                  stockMinimo    = 0.0;
    private Double                  stockPreOrden  = 0.0;
    private Double                  totalIngreso   = 0.0;
    private Double                  totalSalida    = 0.0;
    private Double                  totalStock     = 0.0;
    
    @Enumerated(EnumType.STRING)
    private EstadoStock             estadoStock    = EstadoStock.Normal;
    
    
       
    
    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
    
    
    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
      
    
   
    public Integer getPorcenIva() {
        return porcenIva;
    }

    public void setPorcenIva(Integer iva) {
        this.porcenIva = iva;
    }
    
    
    

    public Producto() {
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

    public Double getStockInicial() {
        return stockInicial;
    }

    public void setStockInicial(Double stockInicial) {
        this.stockInicial = stockInicial;
    }

    public Double getStockMinimo() {
        return stockMinimo;
    }

    public void setStockMinimo(Double stockMinimo) {
        this.stockMinimo = stockMinimo;
    }

    public Double getStockPreOrden() {
        return stockPreOrden;
    }

    public void setStockPreOrden(Double stockPreOrden) {
        this.stockPreOrden = stockPreOrden;
    }

    public Double getTotalIngreso() {
        return totalIngreso;
    }

    public void setTotalIngreso(Double totalIngreso) {
        this.totalIngreso = totalIngreso;
    }

    public Double getTotalSalida() {
        return totalSalida;
    }

    public void setTotalSalida(Double totalSalida) {
        this.totalSalida = totalSalida;
    }

    public Double getTotalStock() {
        return totalStock;
    }

    public void setTotalStock(Double totalStock) {
        this.totalStock = totalStock;
    }

    public String getNotas() {
        return notas;
    }

    public void setNotas(String notas) {
        this.notas = notas;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

    public Integer getPorcenDesc() {
        return porcenDesc;
    }

    public void setPorcenDesc(Integer porcenDesc) {
        this.porcenDesc = porcenDesc;
    }

    public EstadoStock getEstadoStock() {
        return estadoStock;
    }

    public void setEstadoStock(EstadoStock estadoStock) {
        this.estadoStock = estadoStock;
    }
    
    @PrePersist
    public void setStockInicial(){
       totalStock = stockInicial;
       if (stockInicial <= stockPreOrden && stockInicial >= stockMinimo) {
           estadoStock = EstadoStock.Minimo;
       }
       else if ( stockInicial < stockMinimo ) {
           estadoStock = EstadoStock.Critico;
       }
       else {
           estadoStock = EstadoStock.Normal;
       }
    }
    
    @PreUpdate 
    public void setStockInicialOnUpdate(){
       totalStock = stockInicial + totalIngreso - totalSalida;
       if (stockInicial <= stockPreOrden && stockInicial >= stockMinimo) {
           estadoStock = EstadoStock.Minimo;
       }
       else if ( stockInicial < stockMinimo ) {
           estadoStock = EstadoStock.Critico;
       }
       else {
           estadoStock = EstadoStock.Normal;
       }
    }


   
    
            
}

