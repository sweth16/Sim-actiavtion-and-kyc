package com.telecom.simservice.controller;

import com.telecom.simservice.dto.SimRequest;
import com.telecom.simservice.dto.SimResponse;
import com.telecom.simservice.service.SimService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sim")
@RequiredArgsConstructor
public class SimController {

    private final SimService service;

    // Create SIM
    @PostMapping("/request")
    public SimResponse request(@Valid @RequestBody SimRequest request) {
        return service.createSim(request);
    }

    // Track Status
    @GetMapping("/status/{id}")
    public SimResponse status(@PathVariable Long id) {
        return service.status(id);
    }

    // Temporary Verify (until KYC is ready)
    @PutMapping("/verify/{id}")
    public SimResponse verify(@PathVariable Long id) {
        return service.markVerified(id);
    }

    // Activate SIM
    @PutMapping("/activate/{id}")
    public SimResponse activate(@PathVariable Long id) {
        return service.activateSim(id);
    }
}
