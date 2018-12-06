/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion;

import com.dmf.facturacion.controller.PedidoRestController;
import com.dmf.facturacion.model.Pedido;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;

/**
 *
 * @author marcelo
 */
@SpringBootTest
@WebMvcTest(PedidoRestController.class)
public class PedidosRestControllerTest {
    
    @Autowired
    private MockMvc mvc; 
    
    @Test
    public void savePedido() {
        Pedido pedido = new Pedido();
        pedido.setNombre("Hola");
        //cargar todos los datos validos
        
//        mvc.perform();
    }
}
