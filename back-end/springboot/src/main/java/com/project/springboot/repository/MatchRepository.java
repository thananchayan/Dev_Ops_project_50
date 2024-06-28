package com.project.springboot.repository;

import com.project.springboot.model.Matches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MatchRepository extends JpaRepository<Matches,Long> {
    static Matches findById(int matchId) {
        return null;
    }
}

