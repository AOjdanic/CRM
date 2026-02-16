package com.aleksaojdanic.crm.controllers;

import com.aleksaojdanic.crm.dto.TodoDto;
import com.aleksaojdanic.crm.models.Todo;
import com.aleksaojdanic.crm.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/")
    public List<Todo> getTodos() {
        return todoService.getTodos();
    }

    @PostMapping("/create")
    public void createTodo(@RequestBody TodoDto todo) {
        todoService.createTodo(todo.getName(), todo.getContent());
    }
}
