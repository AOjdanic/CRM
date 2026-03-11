package com.aleksaojdanic.crm.repositories;

import com.aleksaojdanic.crm.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
