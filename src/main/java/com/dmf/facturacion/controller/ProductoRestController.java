/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.repositorios.ProductoJPARepository;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

/**
 *
 * @author marcelo
 */

@RestController
@RequestMapping(value = "/api/productos")
public class ProductoRestController {
    
    @Autowired
    ProductoJPARepository productoRepository;
    
    @GetMapping
    public List<Producto> all() {
        return productoRepository.findAll();
    }
    
    @PostMapping("/upload")
    @ResponseBody
    public List<Producto> handleFileUpload(@RequestParam("file") MultipartFile file,
            RedirectAttributes redirectAttributes) throws IOException {

//        storageService.store(file);
        
        List<Producto> result = new ArrayList<>();
        char delimitador = ',';
        CsvMapper mapper = new CsvMapper();
//        CsvSchema schema =  mapper.schemaFor(Producto.class);
        MappingIterator<Producto> it = mapper.readerWithTypedSchemaFor(Producto.class).readValues(file.getBytes());
                
        while (it.hasNext()) {
            result.add(it.next())  ;
        }
        
        productoRepository.save(result);

        return result;
    }
}
