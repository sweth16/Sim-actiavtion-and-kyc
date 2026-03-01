package com.telecom.kyc_service.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class KycUploadRequest {

    @NotNull(message = "Sim ID is required")
    private Long simId;

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotBlank(message = "Document type is required")
    private String docType;

    @NotBlank(message = "Document number is required")
    private String docNumber;

    private String fileName;

    public KycUploadRequest() {
    }

    public KycUploadRequest(Long simId, Long userId, String docType, String docNumber, String fileName) {
        this.simId = simId;
        this.userId = userId;
        this.docType = docType;
        this.docNumber = docNumber;
        this.fileName = fileName;
    }

    public Long getSimId() { return simId; }
    public void setSimId(Long simId) { this.simId = simId; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getDocType() { return docType; }
    public void setDocType(String docType) { this.docType = docType; }

    public String getDocNumber() { return docNumber; }
    public void setDocNumber(String docNumber) { this.docNumber = docNumber; }

    public String getFileName() { return fileName; }
    public void setFileName(String fileName) { this.fileName = fileName; }
}
