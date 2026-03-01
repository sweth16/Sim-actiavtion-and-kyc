package com.telecom.auth_service.security;






import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    private final SecretKey SECRET =
            Keys.hmacShaKeyFor("telecom-secret-telecom-secret-2026".getBytes());

    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)   //  FIXED
                .claim("role", role)
                .setIssuedAt(new Date())   // FIXED
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) //  FIXED
                .signWith(SECRET)
                .compact();
    }
}


