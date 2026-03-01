package com.telecom.simservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SimResponse {
    private Long simId;
    private String status;
}
