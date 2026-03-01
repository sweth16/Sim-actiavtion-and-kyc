package com.telecom.simservice.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Sim {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String phoneNumber;
    @Enumerated(EnumType.STRING)
    private SimStatus status;

}
