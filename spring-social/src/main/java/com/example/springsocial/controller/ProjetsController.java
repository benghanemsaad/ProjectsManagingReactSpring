package com.example.springsocial.controller;

import com.example.springsocial.repository.ProjetsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjetsController {
    @Autowired
    private ProjetsRepository iprojets;
}
