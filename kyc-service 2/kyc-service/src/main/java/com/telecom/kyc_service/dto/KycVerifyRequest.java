package com.telecom.kyc_service.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class KycVerifyRequest {

    @NotNull(message = "Sim ID is required")
    private Long simId;

    @NotBlank(message = "Status is required (VERIFIED or REJECTED)")
    private String status;

    public KycVerifyRequest() {
    }

    public KycVerifyRequest(Long simId, String status) {
        this.simId = simId;
        this.status = status;
    }

    public Long getSimId() { return simId; }
    public void setSimId(Long simId) { this.simId = simId; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
