/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.controller;

import com.dmf.facturacion.filtros.ProductoFilter;
import com.dmf.facturacion.model.Producto;
import com.dmf.facturacion.security.View;
import com.dmf.facturacion.servicios.ProductoServices;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.querydsl.core.types.Predicate;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
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
    private ProductoServices _srvc;
    
    @GetMapping
    public Iterable<Producto> all(Pageable pageReq) {
//        String headerKey = "x-record-count";
//        Long count = _srvc.productoRepo().count();
//        String headerValue = (count.toString());
//        response.setHeader(headerKey, headerValue);
        //como paginar una respuesta.
//        ObjectMapper mapper = new ObjectMapper();
           
        return _srvc.productoRepo().findAll(pageReq);
        
//        return _srvc.productoRepo().findAll();
    }
    
    @GetMapping("/search")
    @JsonView(View.Public.class)
    public List<Producto> search(@RequestParam("search") String search, @RequestParam(name="ids", required = false) Long... ids){
        
        if (ids == null) {
            return _srvc.productoRepo().buscar(search);
        }
        return _srvc.productoRepo().buscar(search, ids);
        
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
        
        _srvc.productoRepo().save(result);
        _srvc.productoRepo().updateStock();

        return result;
    }
    
    //2019-01-24
    @PostMapping
    public Producto save(@RequestBody Producto p) {
        _srvc.productoRepo().save(p);
        return p;
    }
    
    @GetMapping(value = "{productoId}")
    public Producto get(@PathVariable Long productoId) {
        
        return _srvc.productoRepo().findOne(productoId);
    }
    
    @PostMapping(value = "/delete")
    @Transactional
    public List<Producto> delete (@RequestBody Long[] ids) {
        for (Long id: ids) {
            _srvc.productoRepo().delete(id);
        }
        return _srvc.productoRepo().findAll();
    }
    
    @PostMapping(value = "/updateStock")
    @Transactional
    public void updateStock() {
         _srvc.productoRepo().updateStock();
    }
    
    @PostMapping(value = "/filter")
    public Iterable<Producto> filter(@RequestBody ProductoFilter filtro, Pageable pgbl) {
        System.out.println(filtro.getNombre());
        return this._srvc.filter(filtro, pgbl);
    }
}
