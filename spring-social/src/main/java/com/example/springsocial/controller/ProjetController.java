package com.example.springsocial.controller;

import com.example.springsocial.model.Card;
import com.example.springsocial.model.Projet;
import com.example.springsocial.model.TaskFlow;
import com.example.springsocial.repository.ProjetRepository;
import com.example.springsocial.repository.TaskFlowRepository;
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

    @GetMapping(value = "/getAll")
    @ResponseBody
    public Collection<Projet> getAll(){
        return (Collection<Projet>) projetRepository.findAll();
    }

    @PostMapping(value = "/addtaskflow/{id_list}")
    @ResponseBody
    public Projet addTaskFlow(@PathVariable Long id_list , @RequestBody TaskFlow taskFlow){
        taskFlowRepository.save(taskFlow);
        Projet projet = projetRepository.findById(id_list).get();
        projet.addTaskFlow(taskFlow);
        projetRepository.save(projet);
        return(projet);
    }

    /*@GetMapping(value = "/{id_projet}/taskflows/{id_taskflow}")
    @ResponseBody
    public TaskFlow addExistTaskFlow(@PathVariable Long id_projet , @PathVariable Long id_taskflow){
        Card card = taskFlowRepository.findById(id_taskflow).get();
        TaskFlow tf = taskFlowRepository.findById(id_list).get();
        tf.addTask(card);
        taskFlowRepository.save(tf);
        return(tf);
    }*/

    @PostMapping(value = "/add")
    @ResponseBody
    public Projet addProject(@RequestBody Projet projet){
        return projetRepository.save(projet);
    }
}
