package com.example.springsocial.model;

import com.sun.javafx.beans.IDProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Taches")
public class Taches {
    @Id
    public Long numero;

    public Date dateFinale;

    public int dureeTache;

    public String etat;

    public String commentaire;


    public Projets projets;

    public Taches() {
    }

    public Taches(Long numero) {
        this.numero = numero;
    }

    public Taches(Long numero, Date dateFinale, int dureeTache, String etat, String commentaire) {
        this.numero = numero;
        this.dateFinale = dateFinale;
        this.dureeTache = dureeTache;
        this.etat = etat;
        this.commentaire = commentaire;
    }

    public Taches(Long numero, Date dateFinale, int dureeTache, String etat, String commentaire, Projets projets) {
        this.numero = numero;
        this.dateFinale = dateFinale;
        this.dureeTache = dureeTache;
        this.etat = etat;
        this.commentaire = commentaire;
        this.projets = projets;
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

    public Projets getProjets() {
        return projets;
    }

    public void setProjets(Projets newProjets) {
        if (this.projets == null || !this.projets.equals(newProjets)) {
            if (this.projets != null) {
                Projets oldProjets = this.projets;
                this.projets = null;
                oldProjets.removeTaches(this);
            }
            if (newProjets != null) {
                this.projets = newProjets;
                this.projets.addTaches(this);
            }
        }
    }

}