package com.aleksaojdanic.crm.repositories;

import com.aleksaojdanic.crm.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
