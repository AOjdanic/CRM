package com.aleksaojdanic.crm.controllers;

import com.aleksaojdanic.crm.dto.AuthToken;
import com.aleksaojdanic.crm.dto.UserLoginDto;
import com.aleksaojdanic.crm.dto.UserRegistrationDto;
import com.aleksaojdanic.crm.models.User;
import com.aleksaojdanic.crm.repositories.UserRepository;
import com.aleksaojdanic.crm.security.JwtService;
import com.aleksaojdanic.crm.security.SecurityUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserRegistrationDto userRegistrationDto) {
        if (userRegistrationDto.email().isBlank() ||
                userRegistrationDto.password().isBlank() ||
                userRegistrationDto.firstName().isBlank() ||
                userRegistrationDto.lastName().isBlank()
        ) {
            return ResponseEntity.badRequest().body("Invalid user registration details");
        }

        if (userRepository.findByEmail(userRegistrationDto.email()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists!");
        }

        String password = passwordEncoder.encode(userRegistrationDto.password());


        User user = User.builder()
                .email(userRegistrationDto.email())
                .password(password)
                .firstName(userRegistrationDto.firstName())
                .lastName(userRegistrationDto.lastName())
                .build();

        userRepository.save(user);


        return ResponseEntity.ok().build();
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginDto userLoginDto) {
        if (userLoginDto.email().isBlank() || userLoginDto.password().isBlank()) {
            return ResponseEntity.badRequest().body("Invalid user login details");
        }

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginDto.email(), userLoginDto.password()));

        User user = userRepository.findByEmail(userLoginDto.email()).get();

        UserDetails userDetails = new SecurityUser(user);

        String token = jwtService.generateToken(userDetails);

        return ResponseEntity.ok().body(new AuthToken(token));
    }
}
