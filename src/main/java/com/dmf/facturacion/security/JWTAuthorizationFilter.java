/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.security;

import static com.dmf.facturacion.security.Constants.HEADER_AUTHORIZACION_KEY;
import static com.dmf.facturacion.security.Constants.TOKEN_BEARER_PREFIX;
import com.dmf.facturacion.servicios.UserServices;
import io.jsonwebtoken.Jwts;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

/**
 *
 * @author marcelo
 */
@ComponentScan(basePackageClasses = UserServices.class)
public class JWTAuthorizationFilter extends BasicAuthenticationFilter{
    
    
    private UserServices srvc;
    
    private String jwtSecret = Constants.JWT_SECRET;
 
    private Logger logger = LoggerFactory.getLogger(JWTAuthenticationFilter.class);
    
    public JWTAuthorizationFilter(AuthenticationManager authenticationManager, UserServices srvc) {
        super(authenticationManager);
        this.srvc = srvc;
    }
    
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        String header = req.getHeader(HEADER_AUTHORIZACION_KEY);
        if (header == null || !header.startsWith(TOKEN_BEARER_PREFIX)) {
            chain.doFilter(req, res);
            return;
        }
        UsernamePasswordAuthenticationToken authentication = getAuthentication(req);
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(req, res);
    }

	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
		String token = request.getHeader(HEADER_AUTHORIZACION_KEY);
		if (token != null) {
			// Se procesa el token y se recupera el usuario.
			String user = Jwts.parser()
						.setSigningKey(jwtSecret)
						.parseClaimsJws(token.replace(TOKEN_BEARER_PREFIX, ""))
						.getBody()
						.getSubject();

			if (user != null) {
                            
//                            aqui debo verifiar todos los parametros para ver si sigue valido el token
                            
                            return new UsernamePasswordAuthenticationToken(user, null, srvc.getAuthoritiesByUsername(user));
			}
			return null;
		}
		return null;
	}
    
}
