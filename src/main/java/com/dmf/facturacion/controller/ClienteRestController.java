/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.model.TipoCliente;
import com.dmf.facturacion.repositorios.ClienteJPARepository;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marcelo
 */
@RestController
@RequestMapping(value = "/api/clientes")
public class ClienteRestController {

    @Autowired
    ClienteJPARepository clienteRepository;

    @GetMapping(value = "{clienteId}")
    public Cliente get(@PathVariable Long clienteId) {
        System.out.println("Retornando un solo cliente" + clienteId + "\r");
        return clienteRepository.findOne(clienteId);
    }

    @GetMapping
    public List<Cliente> all(ModelMap model) {
        System.out.println("Listando los usuarios\r");
        return clienteRepository.findAll();
    }

    /**
     * Obtener los datos filtrados de los clientes
     *
     * @param model
     * @return
     */
    @GetMapping(value = "/search")
    public List<Cliente> filter(@RequestParam("search") String search) {
        System.out.printf("Buscando %s \r", search);
       
        return clienteRepository.searchAll(search, search);

    }

    @GetMapping(value = "/tipos")
    public List<TipoCliente> allTipos(ModelMap model) {
        System.out.println("Listando los tipos\r");
        List<TipoCliente> tipos = Arrays.asList(new TipoCliente[]{TipoCliente.OCACIONAL, TipoCliente.MINORISTA, TipoCliente.MAYORISTA, TipoCliente.DISTRIBUIDOR});
        return tipos;
    }

    @PostMapping
    public Cliente save(@RequestBody Cliente cliente, BindingResult result) {
        if (result.hasErrors()) {
            return cliente;
        }
        clienteRepository.save(cliente);
        return cliente;
//        return "redirect:/api/cliente";
    }

    @PostMapping(value = "/delete")
    @Transactional
    public Cliente deleteAll(@RequestBody Long[] ids) {
        
        for (Long id : ids) 
            clienteRepository.delete(id);
        
        return new Cliente();

    }
    
    @GetMapping(value = "/exportar" , produces = "text/csv")
    
    public void getCsv(HttpServletResponse response) {
        
        
        
        List<Cliente>  clientes =  clienteRepository.findAll();
        
        String headerKey = "Content-Disposition";
        String headerValue = ("attachment; filename='ClientesCSV.csv'");
        response.setHeader(headerKey, headerValue);
        
        headerKey = "Cache-control";
        headerValue = ("no-cache");
        response.setHeader(headerKey, headerValue);

        
        CsvMapper mapper = new CsvMapper();
        CsvSchema schema = mapper.schemaFor(Cliente.class);
        
        ObjectWriter writer = mapper.writer(schema.withLineSeparator("\n"));
        
        try {
          writer.writeValue(response.getOutputStream(), clientes);
        } catch (JsonGenerationException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    
    @GetMapping(value = "/ruc")
    public Boolean ruc(@RequestParam("ruc") String ruc) {
        return clienteRepository.findOneByRuc(ruc) instanceof Cliente ;
    }
    
}
