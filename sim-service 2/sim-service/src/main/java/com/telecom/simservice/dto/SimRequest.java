package com.telecom.simservice.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SimRequest {

    @NotNull(message = "UserId is required")
    private Long userId;
}
