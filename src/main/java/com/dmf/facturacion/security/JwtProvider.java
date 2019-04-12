/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.security;

import static com.dmf.facturacion.security.Constants.JWT_EXPIRATION;
import static com.dmf.facturacion.security.Constants.JWT_ISSUER_INFO;
import static com.dmf.facturacion.security.Constants.JWT_SECRET;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

/**
 *
 * @author marcelo
 */
public class JwtProvider {
    
    

    /**
     * La generacion del Token podria incluir la fecha de expiracion de la cuenta
     * o la fecha de expiracion de la contraseña
     * @param auth
     * @return 
     */
    public static String generateJwtToken(Authentication auth) {
    
    String token = Jwts.builder().setIssuedAt(new Date()).setIssuer(JWT_ISSUER_INFO)
				.setSubject(((UserDetails)auth.getPrincipal()).getUsername())
				.setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION))
				.signWith(SignatureAlgorithm.HS512, JWT_SECRET).compact();
		return token;

    }
}
