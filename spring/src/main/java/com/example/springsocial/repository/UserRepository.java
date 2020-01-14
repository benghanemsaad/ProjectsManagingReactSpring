package com.example.springsocial.repository;

import com.example.springsocial.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

    @Query(nativeQuery =true,value = "SELECT * from Users u where u.id not in (SELECT employee_id from service_employee ) and u.role = 'Simple' ")
    Collection<User> simpleUserWithoutService() ;


    @Query(nativeQuery =true,value = "SELECT * from Users u where u.id not in (SELECT chef_service_id from service where chef_service_id IS NOT NULL ) and u.role = 'Chef' ")
    Collection<User> ChefWithoutService() ;



}
