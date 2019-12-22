package com.example.springsocial.model;


import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "Services")
public class Services {
    @Id
    public Long idService;

    public String nomService;


    public List<Employers> employers;

    public Services() {
    }

    public Services(Long idService) {
        this.idService = idService;
    }

    public Services(Long idService, String nomService) {
        this.idService = idService;
        this.nomService = nomService;
    }

    public Services(Long idService, String nomService, List<Employers> employers) {
        this.idService = idService;
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
            newEmployers.setServices(this);
        }
    }

    public void removeEmployers(Employers oldEmployers) {
        if (oldEmployers == null)
            return;
        if (this.employers != null)
            if (this.employers.contains(oldEmployers)) {
                this.employers.remove(oldEmployers);
                oldEmployers.setServices((Services) null);
            }
    }

    public void removeAllEmployers() {
        if (employers != null) {
            Employers oldEmployers;
            for (Iterator iter = getIteratorEmployers(); iter.hasNext(); ) {
                oldEmployers = (Employers) iter.next();
                iter.remove();
                oldEmployers.setServices((Services) null);
            }
        }
    }

}