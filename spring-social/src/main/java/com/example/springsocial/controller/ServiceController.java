package com.example.springsocial.controller;

import com.example.springsocial.model.Service;
import com.example.springsocial.repository.ServiceRepository;
import com.example.springsocial.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/service")
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/add")
    @ResponseBody
    public Service addService(@RequestBody Service service) {
        return serviceRepository.save(service);
    }

    @GetMapping(value = "/getAll")
    @ResponseBody
    public Collection<Service> getAll() {
        return (Collection<Service>) serviceRepository.findAll();
    }
}
