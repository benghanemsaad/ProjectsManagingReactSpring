package com.example.springsocial.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Projet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private float budget;

    private String description;

    private String duree ;

    private String objectif ;

    @OneToMany
    private Collection<ValidateProjectEmp> validations ;

    @OneToMany
    private Collection<TaskFlow> taskFlows ;

    public Projet() {
    }

    public Projet(String description, String duree, String objectif) {
        this.description = description;
        this.duree = duree;
        this.objectif = objectif;
    }

    public Projet(float budget, String description, String duree, String objectif) {
        this.budget = budget;
        this.description = description;
        this.duree = duree;
        this.objectif = objectif;
    }

    public float getBudget() {
        return budget;
    }

    public void setBudget(float budget) {
        this.budget = budget;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDuree() {
        return duree;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public String getObjectif() {
        return objectif;
    }

    public void setObjectif(String objectif) {
        this.objectif = objectif;
    }

    public Collection<ValidateProjectEmp> getValidations() {
        return validations;
    }

    public void setValidations(Collection<ValidateProjectEmp> validations) {
        this.validations = validations;
    }

    public Collection<TaskFlow> getTaskFlows() {
        return taskFlows;
    }

    public void setTaskFlows(Collection<TaskFlow> taskFlows) {
        this.taskFlows = taskFlows;
    }
}
