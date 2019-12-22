package com.example.springsocial.repository;

import com.example.springsocial.entity.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Iservices extends JpaRepository<Services, Long> {
}
