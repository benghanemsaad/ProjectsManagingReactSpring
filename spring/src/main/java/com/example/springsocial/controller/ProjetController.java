package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.*;
import com.example.springsocial.repository.*;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/project")
public class ProjetController {

    @Autowired
    private ProjetRepository projetRepository;

    @Autowired
    private TaskFlowRepository taskFlowRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ServiceRepository serviceRepository;


    @Autowired
    private ValidateProjectEmpRepository validateProjectEmpRepository;

    @GetMapping(value = "/getAll")
    @ResponseBody
    public Collection<Projet> getAll() {
        return (Collection<Projet>) projetRepository.findAll();
    }



    @GetMapping(value = "/get/{id}")
    @ResponseBody
    public Projet getById(@PathVariable Long id) {
        return projetRepository.findById(id).get();
    }

    @GetMapping(value = "/valideProject/{id}")
    @ResponseBody
    public String valideProject(@PathVariable Long id) {

        Projet p = projetRepository.findById(id).get();
        int favorable = 0 ;
        int defavorable = 0;
        for (ValidateProjectEmp tmp  : p.getValidations()
        ) {
            if(tmp.getValidation())
            {
                ++favorable ;
            }else{
                ++defavorable ;
            }
        }

        if(favorable > defavorable){
            p.setValide(true);
            projetRepository.save(p) ;
            return "OK";
        }else{
            return "KO";
        }

    }

    @PostMapping(value = "/addtaskflow/{idProjet}")
    @ResponseBody
    public Collection<TaskFlow> addTaskFlow(@PathVariable Long idProjet, @RequestBody TaskFlow taskFlow) {
        taskFlowRepository.save(taskFlow);
        Projet projet = projetRepository.findById(idProjet).orElseThrow(() -> new ResourceNotFoundException("Projet", "id", idProjet));
        projet.addTaskFlow(taskFlow);
        projetRepository.save(projet);
       return projet.getTaskFlows() ;
    }




    @PostMapping(value = "/add")
    @ResponseBody
    public Collection<Projet> addProject(@RequestBody Projet projet , @CurrentUser UserPrincipal userPrincipal) {
        //return projetRepository.save(projet);

        User user = getCurrentUser(userPrincipal);

        Collection<Service> allServices = (Collection<Service>) serviceRepository.findAll();
        long id = -1;

        for (Service s : allServices
        ) {
            if (s.getEmployee().contains(user)) {
                id = s.getId();
            }
        }
        //System.out.println("Le id est " + id);
        if (id >= 0) {
            Service s = serviceRepository.findById(id).get();
            projetRepository.save(projet);
            s.addProject(projet);
            serviceRepository.save(s);
            return serviceRepository.findById(id).get().getProjets();

        } else {
            return null;
        }
    }


    @GetMapping(value = "/{idProjet}/allvalidation")
    @ResponseBody
    public Collection<ValidateProjectEmp> getAllValidation(@PathVariable Long idProjet) {
        Projet projet = projetRepository.findById(idProjet).orElse(new Projet());
        return projet.getValidations();
    }

    @GetMapping(value = "/{idProjet}/alltaskflow")
    @ResponseBody
    public Collection<TaskFlow> getAllTaskFlow(@PathVariable Long idProjet) {
        Projet projet = projetRepository.findById(idProjet).orElse(new Projet());
        return projet.getTaskFlows();
    }

    @GetMapping(value = "/{idProjet}/approuved")
    @ResponseBody
    public Collection<Projet> approuved(@PathVariable Long idProjet) {
        Projet projet = projetRepository.findById(idProjet).get();
        projet.setApprouved(true);
        projetRepository.save(projet);
        return (Collection<Projet>) projetRepository.findAll();
    }

    @GetMapping(value = "/{idProjet}/desapprouved")
    @ResponseBody
    public Collection<Projet> desapprouved(@PathVariable Long idProjet) {
        Projet projet = projetRepository.findById(idProjet).get();
        projet.setApprouved(false);
        projetRepository.save(projet);
        return (Collection<Projet>) projetRepository.findAll();
    }




    @PostMapping("/{idProjet}/validateproject")
    @ResponseBody
    public Collection<ValidateProjectEmp> setNewValidation(@PathVariable Long idProjet, @CurrentUser UserPrincipal userPrincipal ,@RequestBody ValidateProjectEmp validateProjectEmp) {
        User user = getCurrentUser(userPrincipal);
        Projet projet = projetRepository.findById(idProjet).get() ;
        boolean find = false ;
        for (ValidateProjectEmp tmp  : projet.getValidations()
             ) {
            if(tmp.getEmployee().getId().equals(userPrincipal.getId()))
            {
                find = true ;
            }
        }
        if(!find) {
            validateProjectEmp.setEmployee(user);
            validateProjectEmpRepository.save(validateProjectEmp);
            projet = projetRepository.findById(idProjet).orElseThrow(() -> new ResourceNotFoundException("Projet", "id", idProjet));
            projet.addValidateProjectEmp(validateProjectEmp);
            projetRepository.save(projet);
        }

        return projet.getValidations();
    }

    public User getCurrentUser(UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}
