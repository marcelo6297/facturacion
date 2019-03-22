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
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

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
    
    @ManyToOne
    @JoinColumn(name="cliente_id")
    private Cliente cliente;
    
    private String vendedor;
    
    @Enumerated(EnumType.STRING)
    private TipoDocumento tipoDocumento; //Factura, Presupuesto, Recibo, Remision
    
    @Enumerated(EnumType.STRING)
    private EstadoFact estado;        //Pendiente, Pagado, Anulado,
    
    private String numeroDocumento;  
    private Double totalExentas;
    private Double totalIva5;
    private Double totalIva10;
    private Double totalGeneral;
    private Double totalDesc;
    
    @Temporal(TemporalType.DATE)
    private Date   fechaVenta;
    
    @Temporal(TemporalType.DATE)
    private Date   creadoEl;
    
    @Temporal(TemporalType.DATE)
    private Date   actualizadoEl;
    
    @OneToMany(fetch= FetchType.LAZY, mappedBy="venta")
    Set<VentaDetalle>  ventaDetalles;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Venta() {
    }


    public String getCondicionVenta() {
        return condicionVenta;
    }

    public void setCondicionVenta(String condicionVenta) {
        this.condicionVenta = condicionVenta;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public String getVendedor() {
        return vendedor;
    }

    public void setVendedor(String vendedor) {
        this.vendedor = vendedor;
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

    

    public Double getTotalGeneral() {
        return totalGeneral;
    }

    public void setTotalGeneral(Double total) {
        this.totalGeneral = total;
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

    public Double getTotalDesc() {
        return totalDesc;
    }

    public void setTotalDesc(Double totalDesc) {
        this.totalDesc = totalDesc;
    }

    public Set<VentaDetalle> getVentaDetalles() {
        return ventaDetalles;
    }

    public void setVentaDetalles(Set<VentaDetalle> ventaDetalles) {
        this.ventaDetalles = ventaDetalles;
    }

    public TipoDocumento getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(TipoDocumento tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public EstadoFact getEstado() {
        return estado;
    }

    public void setEstado(EstadoFact estado) {
        this.estado = estado;
    }

    
    
    
}
