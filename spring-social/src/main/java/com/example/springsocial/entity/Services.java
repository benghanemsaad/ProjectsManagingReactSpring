package com.example.springsocial.entity;


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
    public List<Employers> employers;

    public Services() {
    }

    public Services(String nomService) {
        this.nomService = nomService;
    }

    public Services(String nomService, List<Employers> employers) {
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

    public List<Employers> getEmployers() {
        if (employers == null)
            employers = new ArrayList<Employers>();
        return employers;
    }

    public Iterator getIteratorEmployers() {
        if (employers == null)
            employers = new ArrayList<Employers>();
        return employers.iterator();
    }

    public void setEmployers(List<Employers> newEmployers) {
        removeAllEmployers();
        for (Iterator iter = newEmployers.iterator(); iter.hasNext(); )
            addEmployers((Employers) iter.next());
    }

    public void addEmployers(Employers newEmployers) {
        if (newEmployers == null)
            return;
        if (this.employers == null)
            this.employers = new ArrayList<Employers>();
        if (!this.employers.contains(newEmployers)) {
            this.employers.add(newEmployers);
        }
    }

    public void removeEmployers(Employers oldEmployers) {
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