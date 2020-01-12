package com.example.springsocial.model;


import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String text;

    private String deadLineDateAndhour;

    private String duration ;

    private String createdBy ;

    private String etat ;

    private String comment ;



    public Card() {
    }

    public Card(@NotNull String text, @NotNull String deadLineDateAndhour, String duration) {
        this.text = text;
        this.deadLineDateAndhour = deadLineDateAndhour;
        this.duration = duration;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDeadLineDateAndhour() {
        return deadLineDateAndhour;
    }

    public void setDeadLineDateAndhour(String deadLineDateAndhour) {
        this.deadLineDateAndhour = deadLineDateAndhour;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
