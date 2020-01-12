package com.example.springsocial.controller;


import com.example.springsocial.model.Card;
import com.example.springsocial.model.Projet;
import com.example.springsocial.model.TaskFlow;
import com.example.springsocial.repository.CardRepository;
import com.example.springsocial.repository.ProjetRepository;
import com.example.springsocial.repository.TaskFlowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;


@RestController
@RequestMapping("/api/v1/listeTaches")
public class TaskFlowController {

    @Autowired
    private TaskFlowRepository taskFlowRepository ;

    @Autowired
    private CardRepository cardRepository ;

    @Autowired
    private ProjetRepository projetRepository ;


    @GetMapping(value = "/getAll")
    @ResponseBody
    public Collection<TaskFlow> getAll(){
        return (Collection<TaskFlow>) taskFlowRepository.findAll();
    }


    @PostMapping(value = "/addTache/{id_list}")
    @ResponseBody
    public TaskFlow addTask(@PathVariable Long id_list , @RequestBody Card card){
        cardRepository.save(card);
        TaskFlow tf = taskFlowRepository.findById(id_list).get();
        tf.addTask(card);
        taskFlowRepository.save(tf);
        return(tf);
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


    @GetMapping(value = "/{id_list_source}/to/{id_list_destination}/tache/{id_tache}")
    @ResponseBody
    public Collection<TaskFlow> moveToOtherTaskflow(@PathVariable Long id_list_source , @PathVariable Long id_list_destination , @PathVariable Long id_tache){
        TaskFlow taskFlowSource = taskFlowRepository.findById(id_list_source).get();
        TaskFlow taskFlowDestination= taskFlowRepository.findById(id_list_destination).get() ;

        Card card = cardRepository.findById(id_tache).get();

        taskFlowSource.deleteTask(card);
        taskFlowDestination.addTask(card);
        taskFlowRepository.save(taskFlowSource);
        taskFlowRepository.save(taskFlowDestination);

        return (Collection<TaskFlow>) taskFlowRepository.findAll();

    }

    @GetMapping(value = "/{id_project}/in/{id_list_source}/to/{id_list_destination}/tache/{id_tache}")
    @ResponseBody
    public Collection<TaskFlow> moveToOtherTaskflow(@PathVariable Long id_project, @PathVariable Long id_list_source, @PathVariable Long id_list_destination, @PathVariable Long id_tache) {
        TaskFlow taskFlowSource = taskFlowRepository.findById(id_list_source).get();
        TaskFlow taskFlowDestination = taskFlowRepository.findById(id_list_destination).get();
        Card card = cardRepository.findById(id_tache).get();
        taskFlowSource.deleteTask(card);
        taskFlowDestination.addTask(card);
        taskFlowRepository.save(taskFlowSource);
        taskFlowRepository.save(taskFlowDestination);
        Projet p =  projetRepository.findById(id_project).get() ;
        return (Collection<TaskFlow>) p.getTaskFlows();
    }


    @PutMapping(value = "/update", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<TaskFlow> updateTaskFlow(@RequestBody TaskFlow taskFlow){
        return new ResponseEntity<>(taskFlowRepository.save(taskFlow), HttpStatus.OK);
    }



    @PostMapping("/add")
    @ResponseBody
    public Collection<TaskFlow> addTache(@RequestBody TaskFlow list){
        taskFlowRepository.save(list);
        Collection<TaskFlow> tasks = (Collection<TaskFlow>) taskFlowRepository.findAll();
        return tasks;
    }
}
