package com.example.springsocial.model;


import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "Projets")
public class Projets {
    @Id
    public Long idProjet;

    public String description;

    public String objectif;

    public int duree;

    public float budget;


    public Employers employers;

    public List<Taches> taches;

    public Projets() {
    }

    public Projets(Long idProjet) {
        this.idProjet = idProjet;
    }

    public Projets(Long idProjet, String description, String objectif, int duree, float budget) {
        this.idProjet = idProjet;
        this.description = description;
        this.objectif = objectif;
        this.duree = duree;
        this.budget = budget;
    }

    public Projets(Long idProjet, String description, String objectif, int duree, float budget, Employers employers) {
        this.idProjet = idProjet;
        this.description = description;
        this.objectif = objectif;
        this.duree = duree;
        this.budget = budget;
        this.employers = employers;
    }

    public Projets(Long idProjet, String description, String objectif, int duree, float budget, Employers employers, List<Taches> taches) {
        this.idProjet = idProjet;
        this.description = description;
        this.objectif = objectif;
        this.duree = duree;
        this.budget = budget;
        this.employers = employers;
        this.taches = taches;
    }

    public Employers getEmployers() {
        return employers;
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

    public void setEmployers(Employers newEmployers) {
        if (this.employers == null || !this.employers.equals(newEmployers)) {
            if (this.employers != null) {
                Employers oldEmployers = this.employers;
                this.employers = null;
                oldEmployers.removeProjets(this);
            }
            if (newEmployers != null) {
                this.employers = newEmployers;
                this.employers.addProjets(this);
            }
        }
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
            newTaches.setProjets(this);
        }
    }

    public void removeTaches(Taches oldTaches) {
        if (oldTaches == null)
            return;
        if (this.taches != null)
            if (this.taches.contains(oldTaches)) {
                this.taches.remove(oldTaches);
                oldTaches.setProjets((Projets) null);
            }
    }

    public void removeAllTaches() {
        if (taches != null) {
            Taches oldTaches;
            for (Iterator iter = getIteratorTaches(); iter.hasNext(); ) {
                oldTaches = (Taches) iter.next();
                iter.remove();
                oldTaches.setProjets((Projets) null);
            }
        }
    }

}