package com.telecom.kyc_service.entity;

import com.telecom.kyc_service.enums.KycStatus;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "kyc_documents")
public class KycDocument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long simId;
    private Long userId;

    private String docType;
    private String docNumber;

    private String fileName;
    private String fileContentType;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] fileData;

    @Enumerated(EnumType.STRING)
    private KycStatus status;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Long getId() { return id; }
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
    public String getFileContentType() { return fileContentType; }
    public void setFileContentType(String fileContentType) { this.fileContentType = fileContentType; }
    public byte[] getFileData() { return fileData; }
    public void setFileData(byte[] fileData) { this.fileData = fileData; }
    public KycStatus getStatus() { return status; }
    public void setStatus(KycStatus status) { this.status = status; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
