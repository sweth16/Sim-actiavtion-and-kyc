package com.telecom.kyc_service.dto;

public class KycResponse {

    private Long id;
    private Long simId;
    private Long userId;
    private String docType;
    private String docNumber;
    private String fileName;
    private String status;

    public KycResponse() {
    }

    public KycResponse(Long id, Long simId, Long userId, String docType, String docNumber,
                       String fileName, String status) {
        this.id = id;
        this.simId = simId;
        this.userId = userId;
        this.docType = docType;
        this.docNumber = docNumber;
        this.fileName = fileName;
        this.status = status;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

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

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
