package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.*;
import com.example.springsocial.repository.ProjetRepository;
import com.example.springsocial.repository.TaskFlowRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.repository.ValidateProjectEmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/project")
public class ProjetController {

    @Autowired
    private ProjetRepository projetRepository;

    @Autowired
    private TaskFlowRepository taskFlowRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ValidateProjectEmpRepository validateProjectEmpRepository;

    @GetMapping(value = "/getAll")
    @ResponseBody
    public Collection<Projet> getAll() {
        return (Collection<Projet>) projetRepository.findAll();
    }

    //@PostMapping(value = "/{idProjet}/addtaskflow")
    @PostMapping(value = "/addtaskflow/{idProjet}")
    @ResponseBody
    public Projet addTaskFlow(@PathVariable Long idProjet, @RequestBody TaskFlow taskFlow) {
        taskFlowRepository.save(taskFlow);
        Projet projet = projetRepository.findById(idProjet).orElseThrow(() -> new ResourceNotFoundException("Projet", "id", idProjet));
        projet.addTaskFlow(taskFlow);
        projetRepository.save(projet);
        return (projet);
    }

    @PostMapping(value = "/add")
    @ResponseBody
    public Projet addProject(@RequestBody Projet projet) {
        return projetRepository.save(projet);
    }

    @GetMapping(value = "/{idProjet}/allvalidation")
    @ResponseBody
    public Collection<ValidateProjectEmp> getAllValidation(@PathVariable Long idProjet) {
        Projet projet = projetRepository.findById(idProjet).orElse(new Projet());
        return projet.getValidations();
    }

    @GetMapping(value = "/{idProjet}/alltaskflow")
    @ResponseBody
    public Collection<TaskFlow> getAllTaskFlow(@PathVariable Long idProjet) {
        Projet projet = projetRepository.findById(idProjet).orElse(new Projet());
        return projet.getTaskFlows();
    }

    @GetMapping("/{id_projet}/validateproject")
    @ResponseBody
    public void setNewValidation(@PathVariable Long idProjet, @RequestParam(value = "comment") String comment, @RequestParam(value = "comment") Long idUser, @RequestParam(value = "comment") boolean validation) {
        User user = userRepository.findById(idUser).orElseThrow(() -> new ResourceNotFoundException("User", "id", idUser));
        ValidateProjectEmp validateProjectEmp = new ValidateProjectEmp(comment, user, validation);
        //validateProjectEmpRepository.save(validateProjectEmp);
        validateProjectEmpRepository.save(validateProjectEmp);
        Projet projet = projetRepository.findById(idProjet).orElseThrow(() -> new ResourceNotFoundException("Projet", "id", idProjet));
        //projet.addValidateProjectEmp(validateProjectEmpRepository.save(validateProjectEmp));
        projet.addValidateProjectEmp(validateProjectEmp);
        projetRepository.save(projet);
    }
}
