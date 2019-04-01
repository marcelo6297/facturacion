/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.filtros;

import java.util.Date;

/**
 *
 * @author marcelo
 */
public class ClienteFilter {
      private String          nombre,apellido,ruc,telefono,direccion1;
      private Boolean         activo;
      private Range<Date>     fechaNacimiento;

    public ClienteFilter() {
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getRuc() {
        return ruc;
    }

    public void setRuc(String ruc) {
        this.ruc = ruc;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion1() {
        return direccion1;
    }

    public void setDireccion1(String direccion1) {
        this.direccion1 = direccion1;
    }

    public Range<Date> getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Range<Date> fechaNac) {
        this.fechaNacimiento = fechaNac;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }
      
      
}
