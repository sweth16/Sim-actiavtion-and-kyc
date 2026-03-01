package com.telecom.simservice.repository;

import com.telecom.simservice.entity.Sim;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SimRepository extends JpaRepository<Sim, Long> {
}
