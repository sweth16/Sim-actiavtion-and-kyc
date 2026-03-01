package com.telecom.kyc_service.service;

import com.telecom.kyc_service.dto.KycResponse;
import com.telecom.kyc_service.dto.KycVerifyRequest;
import com.telecom.kyc_service.entity.KycDocument;
import com.telecom.kyc_service.enums.KycStatus;
import com.telecom.kyc_service.exception.ResourceNotFoundException;
import com.telecom.kyc_service.repository.KycRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.Set;

@Service
public class KycService {

    private final KycRepository repository;

    private static final Set<String> ALLOWED_TYPES = Set.of(
            "application/pdf",
            "image/jpeg",
            "image/jpg",
            "image/png"
    );

    public KycService(KycRepository repository) {
        this.repository = repository;
    }

    public KycResponse upload(Long simId, Long userId, String docType, String docNumber, MultipartFile file) {

        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("File is required");
        }

        String contentType = file.getContentType();
        if (contentType == null || !ALLOWED_TYPES.contains(contentType)) {
            throw new IllegalArgumentException("Only PDF/JPG/JPEG/PNG allowed");
        }

        byte[] fileBytes;
        try {
            fileBytes = file.getBytes();
        } catch (Exception e) {
            throw new IllegalArgumentException("Unable to read file");
        }

        KycDocument document = new KycDocument();
        document.setSimId(simId);
        document.setUserId(userId);
        document.setDocType(docType);
        document.setDocNumber(docNumber);
        document.setFileName(file.getOriginalFilename());
        document.setFileContentType(contentType);
        document.setFileData(fileBytes);
        document.setStatus(KycStatus.KYC_PENDING);
        document.setCreatedAt(LocalDateTime.now());
        document.setUpdatedAt(LocalDateTime.now());

        KycDocument saved = repository.save(document);
        return toResponse(saved);
    }

    public KycResponse verify(KycVerifyRequest request) {
        KycDocument document = repository
                .findTopBySimIdOrderByCreatedAtDesc(request.getSimId())
                .orElseThrow(() -> new ResourceNotFoundException("No KYC found for simId: " + request.getSimId()));

        document.setStatus(KycStatus.valueOf(request.getStatus()));
        document.setUpdatedAt(LocalDateTime.now());

        KycDocument saved = repository.save(document);
        return toResponse(saved);
    }

    public KycResponse getLatestBySimId(Long simId) {
        KycDocument document = repository
                .findTopBySimIdOrderByCreatedAtDesc(simId)
                .orElseThrow(() -> new ResourceNotFoundException("No KYC found for simId: " + simId));

        return toResponse(document);
    }

    public boolean isVerified(Long simId) {
        return repository
                .findTopBySimIdOrderByCreatedAtDesc(simId)
                .map(doc -> KycStatus.VERIFIED.equals(doc.getStatus()))
                .orElse(false);
    }

    public KycDocument getLatestEntity(Long simId) {
        return repository
                .findTopBySimIdOrderByCreatedAtDesc(simId)
                .orElseThrow(() -> new ResourceNotFoundException("No KYC found for simId: " + simId));
    }

    private KycResponse toResponse(KycDocument doc) {
        return new KycResponse(
                doc.getId(),
                doc.getSimId(),
                doc.getUserId(),
                doc.getDocType(),
                doc.getDocNumber(),
                doc.getFileName(),
                doc.getStatus().name()
        );
    }
}
