/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author marcelo
 */
@Entity
public class Venta implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    
    private String condicionVenta; //Credito, Contado
    private String cliente;
    private String vendedor;
    private String tipoDocumento; //Factura, Presupuesto, Recibo, Remision
    private String numeroDocumento;
    private Double totalExentas;
    private Double totalIva5;
    private Double totalIva10;
    private Double totalIva;
    private Double total;
    private Date   fechaVenta;
    private Date   creadoEl;
    private Date   actualizadoEl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Venta() {
    }

    public Venta(Long id, String condicionVenta, String cliente, String vendedor, String tipoDocumento, String numeroDocumento, Double totalExentas, Double totalIva5, Double totalIva10, Double totalIva, Double total, Date fechaVenta, Date creadoEl, Date actualizadoEl) {
        this.id = id;
        this.condicionVenta = condicionVenta;
        this.cliente = cliente;
        this.vendedor = vendedor;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.totalExentas = totalExentas;
        this.totalIva5 = totalIva5;
        this.totalIva10 = totalIva10;
        this.totalIva = totalIva;
        this.total = total;
        this.fechaVenta = fechaVenta;
        this.creadoEl = creadoEl;
        this.actualizadoEl = actualizadoEl;
    }

    public String getCondicionVenta() {
        return condicionVenta;
    }

    public void setCondicionVenta(String condicionVenta) {
        this.condicionVenta = condicionVenta;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getVendedor() {
        return vendedor;
    }

    public void setVendedor(String vendedor) {
        this.vendedor = vendedor;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getNumeroDocumento() {
        return numeroDocumento;
    }

    public void setNumeroDocumento(String numeroDocumento) {
        this.numeroDocumento = numeroDocumento;
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

    public Double getTotalIva() {
        return totalIva;
    }

    public void setTotalIva(Double totalIva) {
        this.totalIva = totalIva;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Date getFechaVenta() {
        return fechaVenta;
    }

    public void setFechaVenta(Date fechaVenta) {
        this.fechaVenta = fechaVenta;
    }

    public Date getCreadoEl() {
        return creadoEl;
    }

    public void setCreadoEl(Date creadoEl) {
        this.creadoEl = creadoEl;
    }

    public Date getActualizadoEl() {
        return actualizadoEl;
    }

    public void setActualizadoEl(Date actualizadoEl) {
        this.actualizadoEl = actualizadoEl;
    }
    
    
}
