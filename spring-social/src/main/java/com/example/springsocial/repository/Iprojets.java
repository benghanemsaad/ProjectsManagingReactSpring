package com.example.springsocial.repository;

import com.example.springsocial.entity.Projets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Iprojets extends JpaRepository<Projets, Long> {
}
