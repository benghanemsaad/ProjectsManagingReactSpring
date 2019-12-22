package com.example.springsocial.model;


import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "Services")
public class Services {
    @Id
    @GeneratedValue
    public Long idService;

    public String nomService;

    @OneToMany
    public List<Users> employers;

    public Services() {
    }

    public Services(String nomService) {
        this.nomService = nomService;
    }

    public Services(String nomService, List<Users> employers) {
        this.nomService = nomService;
        this.employers = employers;
    }

    public Long getIdService() {
        return idService;
    }

    public void setIdService(Long idService) {
        this.idService = idService;
    }

    public String getNomService() {
        return nomService;
    }

    public void setNomService(String nomService) {
        this.nomService = nomService;
    }

    public List<Users> getEmployers() {
        if (employers == null)
            employers = new ArrayList<Users>();
        return employers;
    }

    public Iterator getIteratorEmployers() {
        if (employers == null)
            employers = new ArrayList<Users>();
        return employers.iterator();
    }

    public void setEmployers(List<Users> newEmployers) {
        removeAllEmployers();
        for (Iterator iter = newEmployers.iterator(); iter.hasNext(); )
            addEmployers((Users) iter.next());
    }

    public void addEmployers(Users newEmployers) {
        if (newEmployers == null)
            return;
        if (this.employers == null)
            this.employers = new ArrayList<Users>();
        if (!this.employers.contains(newEmployers)) {
            this.employers.add(newEmployers);
        }
    }

    public void removeEmployers(Users oldEmployers) {
        if (oldEmployers == null)
            return;
        if (this.employers != null)
            if (this.employers.contains(oldEmployers)) {
                this.employers.remove(oldEmployers);
            }
    }

    public void removeAllEmployers() {
        if (employers != null)
            employers.clear();
    }

}