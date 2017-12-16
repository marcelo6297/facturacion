/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Set;
import javax.persistence.*;

/**
 *
 * @author marcelo
 */
@Entity
@Table(name="pedido")
public class Pedido implements Serializable {
    
    
    private Long                    id;
    private Cliente                 cliente;
    private String                  nombre;
    private String                  numeroContacto;
    private Direccion               direccionContacto;

    public String getNumeroContacto() {
        return numeroContacto;
    }

    public void setNumeroContacto(String numeroContacto) {
        this.numeroContacto = numeroContacto;
    }

    @Embedded
    public Direccion getDireccionContacto() {
        return direccionContacto;
    }

    public void setDireccionContacto(Direccion direccionContacto) {
        this.direccionContacto = direccionContacto;
    }

    public String getRuc() {
        return ruc;
    }

    public void setRuc(String ruc) {
        this.ruc = ruc;
    }

    public String getCondicionVenta() {
        return condicionVenta;
    }

    public void setCondicionVenta(String condicionVenta) {
        this.condicionVenta = condicionVenta;
    }

    public String getNumeroRemision() {
        return numeroRemision;
    }

    public void setNumeroRemision(String numeroRemision) {
        this.numeroRemision = numeroRemision;
    }

    public String getEsFactura() {
        return esFactura;
    }

    public void setEsFactura(String esFactura) {
        this.esFactura = esFactura;
    }

    public String getNumeroFactura() {
        return numeroFactura;
    }

    public void setNumeroFactura(String numeroFactura) {
        this.numeroFactura = numeroFactura;
    }

    public BigDecimal getExentas() {
        return exentas;
    }

    public void setExentas(BigDecimal exentas) {
        this.exentas = exentas;
    }

    public BigDecimal getLiqIva5() {
        return liqIva5;
    }

    public void setLiqIva5(BigDecimal liqIva5) {
        this.liqIva5 = liqIva5;
    }

    public BigDecimal getLiqIva10() {
        return liqIva10;
    }

    public void setLiqIva10(BigDecimal liqIva10) {
        this.liqIva10 = liqIva10;
    }

    public BigDecimal getTotalIva() {
        return totalIva;
    }

    public void setTotalIva(BigDecimal totalIva) {
        this.totalIva = totalIva;
    }

    public BigDecimal getSubTotal5() {
        return subTotal5;
    }

    public void setSubTotal5(BigDecimal subTotal5) {
        this.subTotal5 = subTotal5;
    }

    public BigDecimal getSubTotal10() {
        return subTotal10;
    }

    public void setSubTotal10(BigDecimal subTotal10) {
        this.subTotal10 = subTotal10;
    }

    public BigDecimal getTotalGeneral() {
        return totalGeneral;
    }

    public void setTotalGeneral(BigDecimal totalGeneral) {
        this.totalGeneral = totalGeneral;
    }
    private String                  ruc;
    private String                  condicionVenta;
    private String                  numeroRemision;
    
    private String                  esFactura;
    private String                  numeroFactura;
    
    private BigDecimal              exentas;
    private BigDecimal              liqIva5;
    private BigDecimal              liqIva10;
    private BigDecimal              totalIva;
    private BigDecimal              subTotal5;
    private BigDecimal              subTotal10;
    private BigDecimal              totalGeneral;
    
    private Set<ProductoPedido>     productoPedidos;

    public Pedido() {
    }

    
    public Pedido(Long id, Cliente cliente, String nombre) {
        this.id = id;
        this.cliente = cliente;
        this.nombre = nombre;
    }

    @ManyToOne
    @JoinColumn(name="cliente_id")
    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
    
    @Id
    @GeneratedValue( strategy= GenerationType.IDENTITY)
    @Column(name="id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    
    @Column(name="nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @OneToMany (mappedBy="pedido")
    public Set<ProductoPedido> getProductoPedidos() {
        return productoPedidos;
    }

    public void setProductoPedidos(Set<ProductoPedido> productoPedidos) {
        this.productoPedidos = productoPedidos;
    }
    
    
    
    
    
    
}
