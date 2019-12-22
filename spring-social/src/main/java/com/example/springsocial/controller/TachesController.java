package com.example.springsocial.controller;

import com.example.springsocial.repository.TachesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TachesController {
    @Autowired
    private TachesRepository itaches;
}
