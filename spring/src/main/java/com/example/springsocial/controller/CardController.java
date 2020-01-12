package com.example.springsocial.controller;


import com.example.springsocial.model.Card;
import com.example.springsocial.model.TaskFlow;
import com.example.springsocial.repository.CardRepository;
import com.example.springsocial.repository.TaskFlowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.Optional;

@Controller
@RequestMapping("/api/v1/tache")
public class CardController {

    @Autowired
    private CardRepository cardRepository ;

    @Autowired
    private TaskFlowRepository taskFlowRepository ;

    @GetMapping("/getAll")
    @ResponseBody
    public Collection<Card> getAllTask(){
        Collection<Card> cards = (Collection<Card>) cardRepository.findAll();
        return cards ;
    }

    @PostMapping("/addTache")
    @ResponseBody
    public Card addTache(@RequestBody Card card){
        cardRepository.save(card);
        return card;
    }
}
