package com.example.springsocial.controller;

import com.example.springsocial.repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServicesController {
    @Autowired
    private ServicesRepository iservices;
}
