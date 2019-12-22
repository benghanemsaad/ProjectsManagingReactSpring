package com.example.springsocial.entity;


import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "Projets")
public class Projets {
    @Id
    @GeneratedValue
    public Long idProjet;

    public String description;

    public String objectif;

    public int duree;

    public float budget;

    @OneToMany
    public List<Taches> taches;

    public Projets() {
    }


    public Projets(String description, String objectif, int duree, float budget) {
        this.description = description;
        this.objectif = objectif;
        this.duree = duree;
        this.budget = budget;
    }


    public Projets(String description, String objectif, int duree, float budget, List<Taches> taches) {
        this.description = description;
        this.objectif = objectif;
        this.duree = duree;
        this.budget = budget;
        this.taches = taches;
    }


    public Long getIdProjet() {
        return idProjet;
    }

    public void setIdProjet(Long idProjet) {
        this.idProjet = idProjet;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getObjectif() {
        return objectif;
    }

    public void setObjectif(String objectif) {
        this.objectif = objectif;
    }

    public int getDuree() {
        return duree;
    }

    public void setDuree(int duree) {
        this.duree = duree;
    }

    public float getBudget() {
        return budget;
    }

    public void setBudget(float budget) {
        this.budget = budget;
    }

    public List<Taches> getTaches() {
        if (taches == null)
            taches = new ArrayList<Taches>();
        return taches;
    }


    public Iterator getIteratorTaches() {
        if (taches == null)
            taches = new ArrayList<Taches>();
        return taches.iterator();
    }

    public void setTaches(List<Taches> newTaches) {
        removeAllTaches();
        for (Iterator iter = newTaches.iterator(); iter.hasNext(); )
            addTaches((Taches) iter.next());
    }

    public void addTaches(Taches newTaches) {
        if (newTaches == null)
            return;
        if (this.taches == null)
            this.taches = new ArrayList<Taches>();
        if (!this.taches.contains(newTaches)) {
            this.taches.add(newTaches);
        }
    }

    public void removeTaches(Taches oldTaches) {
        if (oldTaches == null)
            return;
        if (this.taches != null)
            if (this.taches.contains(oldTaches)) {
                this.taches.remove(oldTaches);
            }
    }

    public void removeAllTaches() {
        if (taches != null)
            taches.clear();
    }

}