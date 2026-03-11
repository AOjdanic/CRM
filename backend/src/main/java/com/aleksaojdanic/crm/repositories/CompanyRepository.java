package com.aleksaojdanic.crm.repositories;

import com.aleksaojdanic.crm.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
