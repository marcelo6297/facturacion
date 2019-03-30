/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.filtros;

/**
 *
 * @author marcelo
 */
public class Range<T>  {
    T min, max;

    public T getMin() {
        return min;
    }

    public void setMin(T min) {
        this.min = min;
    }

    public T getMax() {
        return max;
    }

    public void setMax(T max) {
        this.max = max;
    }

    public Range(T min, T max) {
        this.min = min;
        this.max = max;
    }

    public Range() {
    }
    
    /**
     * Devuelve true si ambos valores no son null
     * @return Boolean
     */
    public boolean isValid() {
        return !(this.min  == null && this.max  == null);
    }
            
}
