/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.security;

/**
 *
 * @author marcelo
 */
public class View {
    public static class Public{}
    public static class Admin extends Public{}
    public static class Never extends Admin{}
}
