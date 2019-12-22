package com.example.springsocial.repository;

import com.example.springsocial.model.Taches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TachesRepository extends JpaRepository<Taches, Long> {
}
