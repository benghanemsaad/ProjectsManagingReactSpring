package com.example.springsocial.model;

import javax.persistence.*;

@Entity
public class ValidateProjectEmp {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String comment;
    @OneToOne
    private User employee;

    private Boolean validation;

    public ValidateProjectEmp() {
    }

    public ValidateProjectEmp(String comment, User employee, Boolean validation) {
        this.comment = comment;
        this.employee = employee;
        this.validation = validation;
    }

    public ValidateProjectEmp(String comment, Boolean validation) {
        this.comment = comment;
        this.validation = validation;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public User getEmployee() {
        return employee;
    }

    public void setEmployee(User employee) {
        this.employee = employee;
    }

    public Boolean getValidation() {
        return validation;
    }

    public void setValidation(Boolean validation) {
        this.validation = validation;
    }
}
