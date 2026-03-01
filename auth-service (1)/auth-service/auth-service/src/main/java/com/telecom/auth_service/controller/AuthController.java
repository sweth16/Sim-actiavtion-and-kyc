package com.telecom.auth_service.controller;



import com.telecom.auth_service.dto.*;
import com.telecom.auth_service.entity.User;
import com.telecom.auth_service.security.JwtUtil;
import com.telecom.auth_service.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService service;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {

        User user = service.validateUser(
                request.getUsername(),
                request.getPassword()
        );

        if (user == null) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(
                user.getUsername(),
                user.getRole()
        );

        return new AuthResponse(token);
    }


    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return service.register(request);
    }
}

