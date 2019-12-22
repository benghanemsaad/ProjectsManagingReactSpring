package com.example.springsocial.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.*;


@Entity
@Table(name = "Users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idEmp;


    private String matricule;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Email
    @Column(nullable = false)
    private String email;

    private String imageUrl;

    @Column(nullable = false)
    private Boolean emailVerified = false;

    @JsonIgnore
    private String password;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;


    private String tel;

    private String adresse;

    // @Column(nullable = false)
    private String role;

    private String providerId;

    @OneToMany
    private List<Projets> projets;

    public Users() {
    }

    public Users(String matricule, String nom, String prenom, String tel, String email, String adresse, String password, String role) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.email = email;
        this.adresse = adresse;
        this.password = password;
        this.role = role;
        this.provider = AuthProvider.local;
    }

    public Users(String matricule, String nom, String prenom, String tel, String email, String adresse, String password, String role, List<Projets> projets) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.email = email;
        this.adresse = adresse;
        this.password = password;
        this.role = role;
        this.projets = projets;
        this.provider = AuthProvider.local;
    }

    public String getProviderId() {
        return providerId;
    }

    public void setProviderId(String providerId) {
        this.providerId = providerId;
    }

    public Long getIdEmp() {
        return idEmp;
    }

    public void setIdEmp(Long idEmp) {
        this.idEmp = idEmp;
    }

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Boolean getEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public AuthProvider getProvider() {
        return provider;
    }

    public void setProvider(AuthProvider provider) {
        this.provider = provider;
    }

    public List<Projets> getProjets() {
        if (projets == null)
            projets = new ArrayList<>();
        return projets;
    }

    public Iterator getIteratorProjets() {
        if (projets == null)
            projets = new ArrayList<>();
        return projets.iterator();
    }

    public void setProjets(List<Projets> newProjets) {
        removeAllProjets();
        for (Iterator iter = newProjets.iterator(); iter.hasNext(); )
            addProjets((Projets) iter.next());
    }

    public void addProjets(Projets newProjets) {
        if (newProjets == null)
            return;
        if (this.projets == null)
            this.projets = new ArrayList<>();
        if (!this.projets.contains(newProjets)) {
            this.projets.add(newProjets);
        }
    }

    public void removeProjets(Projets oldProjets) {
        if (oldProjets == null) {
            return;
        }
        if (this.projets != null && this.projets.contains(oldProjets)) {
                this.projets.remove(oldProjets);
        }

    }

    public void removeAllProjets() {
        if (projets != null)
            projets.clear();
    }

}