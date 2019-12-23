package com.example.springsocial.controller;


import com.example.springsocial.model.Card;
import com.example.springsocial.model.TaskFlow;
import com.example.springsocial.repository.CardRepository;
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


    @PutMapping(value = "/update", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<TaskFlow> updateVehicle(
                                                  @RequestBody TaskFlow taskFlow){
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
