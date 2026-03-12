package com.aleksaojdanic.crm.services;

import com.aleksaojdanic.crm.models.Office;
import com.aleksaojdanic.crm.repositories.OfficeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OfficeService {
    private final OfficeRepository officeRepository;

    public List<Office> getOffices() {
        return officeRepository.findAll();
    }
}
