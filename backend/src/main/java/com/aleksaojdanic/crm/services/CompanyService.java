package com.aleksaojdanic.crm.services;

import com.aleksaojdanic.crm.models.Company;
import com.aleksaojdanic.crm.repositories.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyService {
    private final CompanyRepository companyRepository;

    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }
}
