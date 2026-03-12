package com.aleksaojdanic.crm.services;

import com.aleksaojdanic.crm.models.Team;
import com.aleksaojdanic.crm.repositories.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TeamService {
    private final TeamRepository teamRepository;

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }
}
