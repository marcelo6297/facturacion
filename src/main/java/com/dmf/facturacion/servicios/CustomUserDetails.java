/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dmf.facturacion.servicios;

import com.dmf.facturacion.model.User;
import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

/**
 *
 * @author marcelo
 */

public class CustomUserDetails implements UserDetails{
    
    User user;
    List<String> userRoles;
    @Value("${com.dfm.facturacion.security.maxFailureAttempts}")
    private Integer maxAttempts=5;

    public CustomUserDetails(User user, List<String> userRoles) {
        this.user = user;
        this.userRoles = userRoles;
    }
    
    

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String roles = StringUtils.collectionToCommaDelimitedString(userRoles);
        return AuthorityUtils.commaSeparatedStringToAuthorityList(roles);
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return user.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return  maxAttempts > user.getFailedAttempts();
       
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;//To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean isEnabled() {
        return  user.getEnabled();
    }
    
}
