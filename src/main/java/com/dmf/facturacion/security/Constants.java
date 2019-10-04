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
public class Constants {
    
    // Spring Security

	public static final String LOGIN_URL = "/login";
	public static final String HEADER_AUTHORIZACION_KEY = "Authorization";
	public static final String TOKEN_BEARER_PREFIX = "Bearer ";
        
//        JWT
        public static final String JWT_SECRET = "3sun4h3m0s4fr4s3" ;
        public static final String JWT_ISSUER_INFO = "FACTURACIONBACKEND" ;
//        Tiempo de vigencia del token 8 horas
        public static final int    JWT_EXPIRATION = 8*60*60*1000 ;
    
}
