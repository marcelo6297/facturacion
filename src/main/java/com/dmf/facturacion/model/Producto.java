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
@JsonPropertyOrder({"id", "codigo","nombre", "descripcion", "precio", "iva" })
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
    
    private Double                  precio;
    private Double                  precioCompra;
    private Integer                 porcenGan;
    private Double                  precioVenta;
    private Integer                 iva;
    private Double                  stockInicial;
    private Double                  stockMinimo;
    private Double                  stockPreOrden;
    private Double                  totalIngreso;
    private Double                  totalSalida;
    private Double                  totalStock;
    private String                  notas;
    private Boolean                 activo;
    
    @JsonIgnore
    @OneToMany(fetch= FetchType.LAZY, mappedBy="producto")
    private Set<ProductoPedido>     productoPedidos;
    
    
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

    
    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
    
    
    public Set<ProductoPedido> getPedidos(){
        return this.productoPedidos;
    }

    public void setPedidos(Set<ProductoPedido> productoPedidos) {
        this.productoPedidos = productoPedidos;
    }

    public Integer getIva() {
        return iva;
    }

    public void setIva(Integer iva) {
        this.iva = iva;
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

    public Producto(Long id, String codigo, String nombre, String descripcion, Double precio, Double precioCompra, Integer porcenGan, Double precioVenta, Integer iva, Double stockInicial, Double stockMinimo, Double stockPreOrden, Double totalIngreso, Double totalSalida, Double totalStock, String notas, Boolean activo) {
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.precioCompra = precioCompra;
        this.porcenGan = porcenGan;
        this.precioVenta = precioVenta;
        this.iva = iva;
        this.stockInicial = stockInicial;
        this.stockMinimo = stockMinimo;
        this.stockPreOrden = stockPreOrden;
        this.totalIngreso = totalIngreso;
        this.totalSalida = totalSalida;
        this.totalStock = totalStock;
        this.notas = notas;
        this.activo = activo;
    }

   
    
            
}
