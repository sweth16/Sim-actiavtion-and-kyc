package com.telecom.simservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "kyc-service")
public interface KycClient {

    @GetMapping("/kyc/status/{userId}")
    Boolean getKycStatus(@PathVariable("userId") Long userId);
}
