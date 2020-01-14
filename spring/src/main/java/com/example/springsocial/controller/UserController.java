package com.example.springsocial.controller;

import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.AuthProvider;
import com.example.springsocial.model.User;
import com.example.springsocial.model.ValidateProjectEmp;
import com.example.springsocial.payload.SignUpRequest;
import com.example.springsocial.repository.ProjetRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.repository.ValidateProjectEmpRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

    @GetMapping("/all")
    public Collection<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping(value = "/add")
    @ResponseBody
    public Collection<User> addUser(@Valid @RequestBody SignUpRequest signUpRequest) {

        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }
        // Creating user's account
        User userTmp = new User();
        userTmp.setName(signUpRequest.getName());
        userTmp.setEmail(signUpRequest.getEmail());
        userTmp.setPassword(signUpRequest.getPassword());
        userTmp.setProvider(AuthProvider.local);
        userTmp.setRole(signUpRequest.getRole());

        userTmp.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        userRepository.save(userTmp);
        return userRepository.findAll();
    }

    @GetMapping(value = "/get/{id}")
    @ResponseBody
    public User getById(@PathVariable Long id) {
        return userRepository.findById(id).get();
    }

    @GetMapping(value = "/notAffected")
    @ResponseBody
    public Collection<User> getUserNotAffected() {
        return userRepository.simpleUserWithoutService();
    }

    @GetMapping(value = "/chefNotAffected")
    @ResponseBody
    public Collection<User> getChefNotAffected() {
        return userRepository.ChefWithoutService();
    }

    @PutMapping("/update/{id}")
    @ResponseBody
    public Collection<User> updateUser(@PathVariable Long id,  @RequestBody SignUpRequest signUpRequest) {

        User usertmp = userRepository.findById(id).get();
        usertmp.setRole(signUpRequest.getRole());
        usertmp.setName(signUpRequest.getName());
        usertmp.setEmail(signUpRequest.getEmail());
        userRepository.save(usertmp);
        return userRepository.findAll();
    }

    @PutMapping("/updateMyProfile/{id}")
    @ResponseBody
    public User updateMyProfile(@PathVariable Long id, @RequestBody SignUpRequest signUpRequest) {

        User usertmp = userRepository.findById(id).get();
        usertmp.setName(signUpRequest.getName());
        usertmp.setEmail(signUpRequest.getEmail());
        usertmp.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        userRepository.save(usertmp);
        return userRepository.findById(id).get();
    }



}
