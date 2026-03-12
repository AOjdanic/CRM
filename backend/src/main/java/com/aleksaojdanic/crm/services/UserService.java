package com.aleksaojdanic.crm.services;

import com.aleksaojdanic.crm.models.User;
import com.aleksaojdanic.crm.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
