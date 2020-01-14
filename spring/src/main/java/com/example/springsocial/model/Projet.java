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

    private String createdBy;

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    private String duree;

    private String objectif;

    private boolean valide ;

    private boolean approuved ;

    public boolean isApprouved() {
        return approuved;
    }

    public void setApprouved(boolean approuved) {
        this.approuved = approuved;
    }

    public boolean isValide() {
        return valide;
    }

    public void setValide(boolean valide) {
        this.valide = valide;
    }

    @OneToMany
    private Collection<ValidateProjectEmp> validations;

    @OneToMany
    private Collection<TaskFlow> taskFlows;

    public Projet() {
    }

    public Projet(String description, String createdBy, String duree, String objectif) {
        this.description = description;
        this.duree = duree;
        this.objectif = objectif;
        this.createdBy = createdBy;
        this.valide = false ;
        this.approuved = false ;

    }

    public Projet(float budget, String createdBy, String description, String duree, String objectif) {
        this.budget = budget;
        this.description = description;
        this.duree = duree;
        this.objectif = objectif;
        this.createdBy = createdBy;
        this.valide = false ;
        this.approuved = false ;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public void addTaskFlow(TaskFlow taskFlow) {
        this.taskFlows.add(taskFlow);
    }

    public void deleteTaskFlow(TaskFlow taskFlow) {
        this.taskFlows.remove(taskFlow);
    }

    public void addValidateProjectEmp(ValidateProjectEmp validateProjectEmp) {
        this.validations.add(validateProjectEmp);
    }

    public void deleteValidateProjectEmp(ValidateProjectEmp validateProjectEmp) {
        this.validations.remove(validateProjectEmp);
    }
}
