package com.example.springsocial.repository;

import com.example.springsocial.model.ValidateProjectEmp;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ValidateProjectEmpRepository extends CrudRepository<ValidateProjectEmp, Long> {
}
