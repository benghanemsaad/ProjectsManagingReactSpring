package com.example.springsocial.model;


import javax.persistence.*;
import java.util.Collection;

@Entity
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name ;

    @OneToMany
    private Collection<User> employee ;
    @OneToOne
    private User chefService ;

    @OneToMany
    private Collection<Projet> projets ;

    public Collection<Projet> getProjets() {
        return projets;
    }

    public void setProjets(Collection<Projet> projets) {
        this.projets = projets;
    }

    public Service() {
    }

    public Service(String name) {
        this.name = name;
    }

    public Service(String name, Collection<User> employee, User chefService) {
        this.name = name;
        this.employee = employee;
        this.chefService = chefService;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<User> getEmployee() {
        return employee;
    }

    public void setEmployee(Collection<User> employee) {
        this.employee = employee;
    }

    public User getChefService() {
        return chefService;
    }

    public void setChefService(User chefService) {
        this.chefService = chefService;
    }
}
