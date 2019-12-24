package com.example.springsocial.controller;

import com.example.springsocial.model.Projet;
import com.example.springsocial.model.TaskFlow;
import com.example.springsocial.repository.ProjetRepository;
import com.example.springsocial.repository.TaskFlowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjetController {

    @Autowired
    private ProjetRepository projetRepository;

    @Autowired
    private TaskFlowRepository taskFlowRepository;

    @PostMapping(value = "/addtaskflow/{id_list}")
    @ResponseBody
    public Projet addTask(@PathVariable Long id_list , @RequestBody TaskFlow taskFlow){
        taskFlowRepository.save(taskFlow);
        Projet projet = projetRepository.findById(id_list).get();
        //tf.addTask(taskFlow);
        projetRepository.save(projet);
        return(projet);
    }

    @PostMapping(value = "/addtaskflow/{id_list}")
    @ResponseBody
    public Projet addProject(@RequestBody Projet projet){
        return projetRepository.save(projet);
    }
}
