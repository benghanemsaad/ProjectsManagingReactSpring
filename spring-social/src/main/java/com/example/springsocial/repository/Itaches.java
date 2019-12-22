package com.example.springsocial.repository;

import com.example.springsocial.entity.Taches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Itaches extends JpaRepository<Taches, Long> {
}
