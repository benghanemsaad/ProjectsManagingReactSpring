package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Projet;
import com.example.springsocial.model.Service;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.ProjetRepository;
import com.example.springsocial.repository.ServiceRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/service")
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjetRepository projetRepository;

    @PostMapping(value = "/add")
    @ResponseBody
    public Collection<Service> addService(@RequestBody Service service) {

        serviceRepository.save(service);
        return (Collection<Service>) serviceRepository.findAll();
    }

    @GetMapping(value = "/getAll")
    @ResponseBody
    public Collection<Service> getAll() {
        return (Collection<Service>) serviceRepository.findAll();
    }

    @GetMapping(value = "/{id}/getEmp")
    @ResponseBody
    public Collection<User> getEmp(@PathVariable Long id) {
        return serviceRepository.findById(id).get().getEmployee();
    }

    @GetMapping(value = "/{id}/addEmp/{id_emp}")
    @ResponseBody
    public Collection<User> addEmpInService(@PathVariable Long id ,@PathVariable Long id_emp ) {
        User u = userRepository.findById(id_emp).get();
        Service s = serviceRepository.findById(id).get();
        s.addEmployee(u);
        serviceRepository.save(s);
        return serviceRepository.findById(id).get().getEmployee();
    }

    @GetMapping(value = "/{id}/deleteEmp/{id_emp}")
    @ResponseBody
    public Collection<User> deleteEmpFromService(@PathVariable Long id ,@PathVariable Long id_emp ) {
        User u = userRepository.findById(id_emp).get();
        Service s = serviceRepository.findById(id).get();
        s.deleteEmployee(u);
        serviceRepository.save(s);
        return serviceRepository.findById(id).get().getEmployee();
    }

    @GetMapping(value = "/{id}/affecteChef/{id_emp}")
    @ResponseBody
    public Collection<Service> affecteChef(@PathVariable Long id , @PathVariable Long id_emp ) {
        User u = userRepository.findById(id_emp).get();
        Service s = serviceRepository.findById(id).get();
        s.addEmployee(u);
        s.setChefService(u);
        serviceRepository.save(s);
        return (Collection<Service>) serviceRepository.findAll();
    }

    @GetMapping(value = "/{id}/desaffecteChef")
    @ResponseBody
    public Collection<Service> desaffecteChef(@PathVariable Long id  ) {
        Service s = serviceRepository.findById(id).get();
        User chef = s.getChefService();
        s.deleteEmployee(chef);
        s.deleteChef();
        serviceRepository.save(s);
        return (Collection<Service>) serviceRepository.findAll();
    }

    @GetMapping("/getProjects")
    @ResponseBody
    public Collection<Projet> getProjectInService( @CurrentUser UserPrincipal userPrincipal ) {


        User user = getCurrentUser(userPrincipal);
        if(user.getRole().equals("Admin")){
            return (Collection<Projet>) projetRepository.findAll();
        }
        Collection<Service> allServices = (Collection<Service>) serviceRepository.findAll();
        long id = -1 ;

        for (Service s : allServices
             ) {
            if(s.getEmployee().contains(user)){
                id = s.getId();
            }
        }
        System.out.println("Le id est " + id);
            return serviceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not affected emp", "id", userPrincipal.getId())).getProjets() ;

    }

        public User getCurrentUser(UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }


}
