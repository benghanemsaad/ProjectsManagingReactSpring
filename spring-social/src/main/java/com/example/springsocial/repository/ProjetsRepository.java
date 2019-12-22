package com.example.springsocial.repository;

import com.example.springsocial.model.Projets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjetsRepository extends JpaRepository<Projets, Long> {
}
