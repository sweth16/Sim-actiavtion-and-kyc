package com.telecom.apigateway.filter;

import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class JwtAuthenticationFilter implements GlobalFilter {

    @Value("${jwt.secret}")
    private String secret;

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

        String path = exchange.getRequest().getURI().getPath();

        if (path.contains("/auth/login") || path.contains("/auth/register")) {
            return chain.filter(exchange);
        }

        if (!exchange.getRequest().getHeaders().containsKey("Authorization")) {
            throw new RuntimeException("Missing Authorization Header");
        }

        String token = exchange.getRequest()
                .getHeaders()
                .getFirst("Authorization")
                .substring(7);

        try {
            Jwts.parserBuilder()
                    .setSigningKey(secret.getBytes())
                    .build()
                    .parseClaimsJws(token);
        } catch (Exception e) {
            throw new RuntimeException("Invalid Token");
        }

        return chain.filter(exchange);
    }
}
