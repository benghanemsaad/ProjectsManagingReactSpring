package com.example.springsocial.entity;

import javax.persistence.*;
import java.util.*;


@Entity
@Table(name = "Employers")
public class Employers {
    @Id
    @GeneratedValue //(strategy = GenerationType.AUTO)
    public Long idEmp;

    public String matricule;

    public String nom;

    public String prenom;

    public String tel;

    public String email;

    public String adresse;

    public String password;

    public String role;

    @OneToMany
    public List<Projets> projets;

    public Employers() {
    }


    public Employers(String matricule, String nom, String prenom, String tel, String email, String adresse, String password, String role) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.email = email;
        this.adresse = adresse;
        this.password = password;
        this.role = role;
    }

    public Employers(String matricule, String nom, String prenom, String tel, String email, String adresse, String password, String role, List<Projets> projets) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.email = email;
        this.adresse = adresse;
        this.password = password;
        this.role = role;
        this.projets = projets;
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

    public String getpassword() {
        return password;
    }

    public void setpassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Projets> getProjets() {
        if (projets == null)
            projets = new ArrayList<Projets>();
        return projets;
    }

    public Iterator getIteratorProjets() {
        if (projets == null)
            projets = new ArrayList<Projets>();
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
            this.projets = new ArrayList<Projets>();
        if (!this.projets.contains(newProjets)) {
            this.projets.add(newProjets);
        }
    }

    public void removeProjets(Projets oldProjets) {
        if (oldProjets == null)
            return;
        if (this.projets != null)
            if (this.projets.contains(oldProjets)) {
                this.projets.remove(oldProjets);
            }
    }

    public void removeAllProjets() {
        if (projets != null)
            projets.clear();
    }

}