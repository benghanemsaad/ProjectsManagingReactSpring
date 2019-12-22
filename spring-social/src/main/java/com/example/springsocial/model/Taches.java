package com.example.springsocial.model;

import com.sun.javafx.beans.IDProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Taches")
public class Taches {
    @Id
    @GeneratedValue
    public Long numero;

    public Date dateFinale;

    public int dureeTache;

    public String etat;

    public String commentaire;


    public Taches() {
    }

    public Taches(Date dateFinale, int dureeTache, String etat, String commentaire) {
        this.dateFinale = dateFinale;
        this.dureeTache = dureeTache;
        this.etat = etat;
        this.commentaire = commentaire;
    }

    public Long getNumero() {
        return numero;
    }

    public void setNumero(Long numero) {
        this.numero = numero;
    }

    public Date getDateFinale() {
        return dateFinale;
    }

    public void setDateFinale(Date dateFinale) {
        this.dateFinale = dateFinale;
    }

    public int getDureeTache() {
        return dureeTache;
    }

    public void setDureeTache(int dureeTache) {
        this.dureeTache = dureeTache;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getCommentaire() {
        return commentaire;
    }

    public void setCommentaire(String commentaire) {
        this.commentaire = commentaire;
    }


}