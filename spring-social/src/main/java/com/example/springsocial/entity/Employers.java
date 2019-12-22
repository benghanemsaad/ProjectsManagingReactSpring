package com.example.springsocial.model;

import javax.persistence.*;
import java.util.*;


@Entity
@Table(name = "Employers")
public class Employers {
    @Id
    public Long idEmp;

    public String matricule;

    public String nom;

    public String prenom;

    public String tel;

    public String email;

    public String adresse;

    public String passwoed;

    public String role;

    public Services services;

    public List<Projets> projets;

    public Employers() {
    }

    public Employers(Long idEmp) {
        this.idEmp = idEmp;
    }

    public Employers(Long idEmp, String matricule, String nom, String prenom, String tel, String email, String adresse, String passwoed, String role) {
        this.idEmp = idEmp;
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.email = email;
        this.adresse = adresse;
        this.passwoed = passwoed;
        this.role = role;
    }

    public Employers(Long idEmp, String matricule, String nom, String prenom, String tel, String email, String adresse, String passwoed, String role, Services services) {
        this.idEmp = idEmp;
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.email = email;
        this.adresse = adresse;
        this.passwoed = passwoed;
        this.role = role;
        this.services = services;
    }

    public Employers(Long idEmp, String matricule, String nom, String prenom, String tel, String email, String adresse, String passwoed, String role, Services services, List<Projets> projets) {
        this.idEmp = idEmp;
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.email = email;
        this.adresse = adresse;
        this.passwoed = passwoed;
        this.role = role;
        this.services = services;
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

    public String getPasswoed() {
        return passwoed;
    }

    public void setPasswoed(String passwoed) {
        this.passwoed = passwoed;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Services getServices() {
        return services;
    }

    public void setServices(Services newServices) {
        if (this.services == null || !this.services.equals(newServices)) {
            if (this.services != null) {
                Services oldServices = this.services;
                this.services = null;
                oldServices.removeEmployers(this);
            }
            if (newServices != null) {
                this.services = newServices;
                this.services.addEmployers(this);
            }
        }
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
            newProjets.setEmployers(this);
        }
    }

    public void removeProjets(Projets oldProjets) {
        if (oldProjets == null)
            return;
        if (this.projets != null)
            if (this.projets.contains(oldProjets)) {
                this.projets.remove(oldProjets);
                oldProjets.setEmployers((Employers) null);
            }
    }

    public void removeAllProjets() {
        if (projets != null) {
            Projets oldProjets;
            for (Iterator iter = getIteratorProjets(); iter.hasNext(); ) {
                oldProjets = (Projets) iter.next();
                iter.remove();
                oldProjets.setEmployers((Employers) null);
            }
        }
    }

}