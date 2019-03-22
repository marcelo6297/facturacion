/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.model.Cliente;
import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.repositorios.ProductoJPARepository;
import com.dmf.facturacion.servicios.ProductoServices;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    ProductoServices service;
    
    @GetMapping
    public Iterable<Producto> all(Pageable pageReq) {
//        String headerKey = "x-record-count";
//        Long count = service.productoRepo().count();
//        String headerValue = (count.toString());
//        response.setHeader(headerKey, headerValue);
        //como paginar una respuesta.
        
        return service.productoRepo().findAll(pageReq);
        
//        return service.productoRepo().findAll();
    }
    
    @GetMapping("/search")
    public List<Producto> search(@RequestParam("search") String search, @RequestParam(name="ids", required = false) Long... ids){
        
        if (ids == null) {
            return service.productoRepo().buscar(search);
        }
        return service.productoRepo().buscar(search, ids);
        
    }
    
    @PostMapping("/upload")
    @ResponseBody
    @Transactional
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
        
        service.productoRepo().save(result);
        service.productoRepo().updateStock();

        return result;
    }
    
    //2019-01-24
    @PostMapping
    public Producto save(@RequestBody Producto p) {
        service.productoRepo().save(p);
        return p;
    }
    
    @GetMapping(value = "{productoId}")
    public Producto get(@PathVariable Long productoId) {
        
        return service.productoRepo().findOne(productoId);
    }
    
    @PostMapping(value = "/delete")
    @Transactional
    public List<Producto> delete (@RequestBody Long[] ids) {
        for (Long id: ids) {
            service.productoRepo().delete(id);
        }
        return service.productoRepo().findAll();
    }
    
    @PostMapping(value = "/updateStock")
    @Transactional
    public void updateStock() {
         service.productoRepo().updateStock();
    }
}
