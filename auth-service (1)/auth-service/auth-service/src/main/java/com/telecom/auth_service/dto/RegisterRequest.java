package com.telecom.auth_service.dto;

//package com.telecom.auth_service.dto;

import lombok.Data;

@Data
public class RegisterRequest {

    private String username;
    private String password;
    private String role;
    private String phone;
}
