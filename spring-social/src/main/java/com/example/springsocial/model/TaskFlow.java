package com.example.springsocial.model;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name = "task_flow")
public class TaskFlow {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String title;


    @OneToMany
    private Collection<Card> cards ;


    public TaskFlow() {
    }

    public TaskFlow(String title) {
        this.title = title;
        this.cards = new ArrayList<>();
    }

    public TaskFlow( String title, Collection<Card> cards) {
        this.title = title;
        this.cards = cards;
    }


    public void addTask(Card card){
        this.cards.add(card);
    }

    public void deleteTask(Card card){
        this.cards.remove(card);
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Collection<Card> getCards() {
        return cards;
    }

    public void setCards(Collection<Card> cards) {
        this.cards = cards;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
