package com.aleksaojdanic.crm.models;

import com.aleksaojdanic.crm.dto.TodoDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Setter
@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String content;


    public Todo(TodoDto todoDto) {
        this.name = todoDto.name();
        this.content = todoDto.content();
    }
}
