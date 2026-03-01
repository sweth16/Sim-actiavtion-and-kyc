package com.telecom.kyc_service.repository;

import com.telecom.kyc_service.entity.KycDocument;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KycRepository extends JpaRepository<KycDocument, Long> {
    Optional<KycDocument> findTopBySimIdOrderByCreatedAtDesc(Long simId);
}
