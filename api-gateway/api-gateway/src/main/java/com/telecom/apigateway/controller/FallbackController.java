package com.telecom.apigateway.controller;

//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
//public class FallbackController {
//
//    @GetMapping("/fallback/auth")
//    public String authFallback() {
//        return "Auth Service is currently unavailable.";
//    }
//
//    @GetMapping("/fallback/sim")
//    public String simFallback() {
//        return "SIM Service is currently unavailable.";
//    }
//
//    @GetMapping("/fallback/kyc")
//    public String kycFallback() {
//        return "KYC Service is currently unavailable.";
//    }
//
//    @GetMapping("/fallback/notification")
//    public String notificationFallback() {
//        return "Notification Service is currently unavailable.";
//    }
//}
@RestController
public class FallbackController {

    @RequestMapping("/fallback/auth")
    public String authFallback() {
        return "Auth Service is currently unavailable.";
    }

    @RequestMapping("/fallback/sim")
    public String simFallback() {
        return "SIM Service is currently unavailable.";
    }

    @RequestMapping("/fallback/kyc")
    public String kycFallback() {
        return "KYC Service is currently unavailable.";
    }

    @RequestMapping("/fallback/notification")
    public String notificationFallback() {
        return "Notification Service is currently unavailable.";
    }
}

