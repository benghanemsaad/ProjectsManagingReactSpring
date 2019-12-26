package com.example.springsocial.controller;

import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.repository.ValidateProjectEmpRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ValidateProjectEmpController {

    @Autowired
    private ValidateProjectEmpRepository validateProjectEmpRepository;

    @Autowired
    private UserRepository userRepository;


}
