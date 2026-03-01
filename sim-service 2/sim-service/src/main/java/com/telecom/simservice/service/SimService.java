package com.telecom.simservice.service;

import com.telecom.simservice.dto.SimRequest;
import com.telecom.simservice.dto.SimResponse;
import com.telecom.simservice.entity.Sim;
import com.telecom.simservice.entity.SimStatus;
import com.telecom.simservice.exception.SimNotFoundException;
import com.telecom.simservice.feign.KycClient;
import com.telecom.simservice.feign.NotificationClient;
import com.telecom.simservice.repository.SimRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class SimService {

    private final SimRepository repository;
    private final KycClient kycClient;
    private final NotificationClient notificationClient;

    // 1️⃣ Create SIM
    public SimResponse createSim(SimRequest request) {

        log.info("Creating SIM for userId: {}", request.getUserId());

        Sim sim = new Sim();
        sim.setUserId(request.getUserId());
        sim.setPhoneNumber("9" + System.currentTimeMillis());

        try {
            Boolean verified = kycClient.getKycStatus(request.getUserId());

            if (Boolean.TRUE.equals(verified)) {
                sim.setStatus(SimStatus.VERIFIED);
                log.info("KYC verified for userId: {}", request.getUserId());
            } else {
                sim.setStatus(SimStatus.KYC_PENDING);
                log.info("KYC pending for userId: {}", request.getUserId());
            }

        } catch (Exception e) {
            log.warn("KYC service not available. Defaulting to KYC_PENDING");
            sim.setStatus(SimStatus.KYC_PENDING);
        }

        repository.save(sim);
        log.info("SIM created successfully with ID: {}", sim.getId());

        // 🔔 Send notification after creation
        try {
            notificationClient.send(
                    "SIM request created successfully. SIM ID: " + sim.getId()
            );
            log.info("Creation notification sent for SIM ID: {}", sim.getId());
        } catch (Exception e) {
            log.warn("Notification service unavailable during SIM creation.");
        }

        return new SimResponse(sim.getId(), sim.getStatus().name());
    }

    // 2️⃣ Track Status
    public SimResponse status(Long id) {

        log.info("Fetching SIM status for ID: {}", id);

        Sim sim = repository.findById(id)
                .orElseThrow(() ->
                        new SimNotFoundException("SIM not found with id: " + id));

        return new SimResponse(sim.getId(), sim.getStatus().name());
    }

    // 3️⃣ Temporary Manual Verify (Remove after real KYC integration)
    public SimResponse markVerified(Long id) {

        log.info("Manually verifying SIM ID: {}", id);

        Sim sim = repository.findById(id)
                .orElseThrow(() ->
                        new SimNotFoundException("SIM not found with id: " + id));

        sim.setStatus(SimStatus.VERIFIED);
        repository.save(sim);

        log.info("SIM manually verified for ID: {}", id);

        return new SimResponse(sim.getId(), sim.getStatus().name());
    }

    // 4️⃣ Activate SIM
    public SimResponse activateSim(Long id) {

        log.info("Activating SIM ID: {}", id);

        Sim sim = repository.findById(id)
                .orElseThrow(() ->
                        new SimNotFoundException("SIM not found with id: " + id));

        if (!SimStatus.VERIFIED.equals(sim.getStatus())) {
            throw new RuntimeException("SIM cannot be activated. KYC not verified.");
        }

        sim.setStatus(SimStatus.ACTIVATED);
        repository.save(sim);

        log.info("SIM activated successfully for ID: {}", id);

        // 🔔 Send notification after activation
        try {
            notificationClient.send(
                    "SIM Activated Successfully. SIM ID: " + sim.getId()
            );
            log.info("Activation notification sent for SIM ID: {}", id);
        } catch (Exception e) {
            log.warn("Notification service unavailable during activation.");
        }

        return new SimResponse(sim.getId(), sim.getStatus().name());
    }
}
