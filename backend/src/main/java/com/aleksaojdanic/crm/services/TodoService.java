package com.aleksaojdanic.crm.services;

import com.aleksaojdanic.crm.dto.TodoDto;
import com.aleksaojdanic.crm.models.Todo;
import com.aleksaojdanic.crm.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    public void createTodo(TodoDto todoDto) {
        todoRepository.save(new Todo(todoDto));
    }
}
