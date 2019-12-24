package com.example.springsocial.controller;

import com.example.springsocial.model.Card;
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
        projet.addTaskFlow(taskFlow);
        projetRepository.save(projet);
        return(projet);
    }

    @GetMapping(value = "/{id_list}/tache/{id_tache}")
    @ResponseBody
    public TaskFlow addExistTask(@PathVariable Long id_list , @PathVariable Long id_tache){
        Card card = cardRepository.findById(id_tache).get();
        TaskFlow tf = taskFlowRepository.findById(id_list).get();
        tf.addTask(card);
        taskFlowRepository.save(tf);
        return(tf);
    }

    @PostMapping(value = "/add")
    @ResponseBody
    public Projet addProject(@RequestBody Projet projet){
        return projetRepository.save(projet);
    }
}
