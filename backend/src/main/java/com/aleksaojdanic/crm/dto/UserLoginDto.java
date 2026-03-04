package com.aleksaojdanic.crm.dto;

import jakarta.validation.constraints.NotBlank;

public record UserLoginDto(
        @NotBlank(message = "Email field is required")
        String email,

        @NotBlank(message = "Password field is required")
        String password
) {
}
