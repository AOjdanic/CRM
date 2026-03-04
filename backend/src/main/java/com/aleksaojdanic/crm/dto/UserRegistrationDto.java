package com.aleksaojdanic.crm.dto;

import jakarta.validation.constraints.NotBlank;

public record UserRegistrationDto(
        @NotBlank(message = "The first name field is required")
        String firstName,

        @NotBlank(message = "The last name field is required")
        String lastName,

        @NotBlank(message = "The email field is required")
        String email,

        @NotBlank(message = "The password field is required")
        String password
) {
}
