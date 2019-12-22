package com.example.springsocial.repository;

import com.example.springsocial.entity.Employers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Iemployers extends JpaRepository<Employers, Long> {

}
