/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.filtros;

import java.io.Serializable;

/**
 *
 * @author marcelo
 */

public class ProductoFilter implements Serializable{
    String nombre, codigo, estadoStock;
    Range<Double> precioVenta, precioCompra,totalStock;
    Boolean estaActivo;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Range<Double> getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(Range<Double> precioVenta) {
        this.precioVenta = precioVenta;
    }

    public Range<Double> getPrecioCompra() {
        return precioCompra;
    }

    public void setPrecioCompra(Range<Double> precioCompra) {
        this.precioCompra = precioCompra;
    }

    public ProductoFilter() {
    }   

    public Range<Double> getTotalStock() {
        return totalStock;
    }

    public void setTotalStock(Range<Double> totalStock) {
        this.totalStock = totalStock;
    }

    public String getEstadoStock() {
        return estadoStock;
    }

    public void setEstadoStock(String estadoStock) {
        this.estadoStock = estadoStock;
    }

    public Boolean getEstaActivo() {
        return estaActivo;
    }

    public void setEstaActivo(Boolean estaActivo) {
        this.estaActivo = estaActivo;
    }
     
     
    
    
}
