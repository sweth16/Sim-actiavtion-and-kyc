package com.telecom.kyc_service.controller;

import com.telecom.kyc_service.dto.KycResponse;
import com.telecom.kyc_service.dto.KycVerifyRequest;
import com.telecom.kyc_service.service.KycService;
import jakarta.validation.Valid;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/kyc")
public class KycController {

    private final KycService service;

    public KycController(KycService service) {
        this.service = service;
    }

    // ✅ Multipart upload (PDF/JPG/PNG)
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public KycResponse upload(
            @RequestParam Long simId,
            @RequestParam Long userId,
            @RequestParam String docType,
            @RequestParam String docNumber,
            @RequestPart("file") MultipartFile file
    ) {
        return service.upload(simId, userId, docType, docNumber, file);
    }

    @PutMapping("/verify")
    public KycResponse verify(@Valid @RequestBody KycVerifyRequest request) {
        return service.verify(request);
    }

    @GetMapping("/latest/{simId}")
    public KycResponse latest(@PathVariable Long simId) {
        return service.getLatestBySimId(simId);
    }

    @GetMapping("/is-verified/{simId}")
    public boolean isVerified(@PathVariable Long simId) {
        return service.isVerified(simId);
    }
}
