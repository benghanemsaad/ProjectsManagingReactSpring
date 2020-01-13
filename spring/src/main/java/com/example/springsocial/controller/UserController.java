package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.model.ValidateProjectEmp;
import com.example.springsocial.repository.ProjetRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.repository.ValidateProjectEmpRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

    @GetMapping("/all")
    public Collection<User> getAllUsers(){
        return userRepository.findAll();
    }




    /*
    @PostMapping(value = "/add")
    @ResponseBody
    public User addTaskFlow(@PathVariable Long idProjet, @RequestBody User user) {
        taskFlowRepository.save(taskFlow);
        Projet projet = projetRepository.findById(idProjet).orElseThrow(() -> new ResourceNotFoundException("Projet", "id", idProjet));
        projet.addTaskFlow(taskFlow);
        projetRepository.save(projet);
        return projet.getTaskFlows() ;
    }*/


}
