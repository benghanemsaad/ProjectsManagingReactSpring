import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/api/v1/user/me",
        method: 'GET'
    });
}

export function moveTask(src,dest,idCard ,id) {
    
    return request({
        url: API_BASE_URL + "/api/v1/listeTaches/"+id+"/in/"+src+"/to/"+dest+"/tache/"+idCard,
        method: 'GET'
    });
}

export function addValidaion(id_project,validation) {
    return request({
        url: API_BASE_URL + "/api/v1/project/"+id_project+"/validateproject",
        method: 'POST',
        body: JSON.stringify(validation)
    });

}

export function addUser(user) {
    return request({
        url: API_BASE_URL + "/api/v1/user/add",
        method: 'POST',
        body: JSON.stringify(user)
    });

}

export function addService(service) {
    return request({
        url: API_BASE_URL + "/api/v1/service/add",
        method: 'POST',
        body: JSON.stringify(service)
    });
}

export function updateUser(user , id_user) {
    return request({
        url: API_BASE_URL + "/api/v1/user/update/"+id_user,
        method: 'PUT',
        body: JSON.stringify(user)
    });

}

export function updateMyProfile(user , id_user) {
    return request({
        url: API_BASE_URL + "/api/v1/user/updateMyProfile/"+id_user,
        method: 'PUT',
        body: JSON.stringify(user)
    });

}


export function getAllValidation(id_project){
    return request({
        url: API_BASE_URL + "/api/v1/project/"+id_project+"/allvalidation",
        method: 'GET'
    });
}

export function getAllServices(){
    return request({
        url: API_BASE_URL + "/api/v1/service/getAll",
        method: 'GET'
    });
}

export function affecteChefAuService(idUser , idService){
    return request({
        url: API_BASE_URL + "/api/v1/service/"+idService+"/affecteChef/"+idUser,
        method: 'GET'
    });
}

export function desaffecteChefAuService(idService){
    return request({
        url: API_BASE_URL + "/api/v1/service/"+idService+"/desaffecteChef",
        method: 'GET'
    });
}

export function getAllUsers(){
    return request({
        url: API_BASE_URL + "/api/v1/user/all",
        method: 'GET'
    });
}

export function getAllUsersWithoutService(){
    return request({
        url: API_BASE_URL + "/api/v1/user/notAffected",
        method: 'GET'
    });
}

export function getAllChefsWithoutService(){
    return request({
        url: API_BASE_URL + "/api/v1/user/chefNotAffected",
        method: 'GET'
    });
}

export function getAllUsersInService(serviceId){
    return request({
        url: API_BASE_URL + "/api/v1/service/"+serviceId+"/getEmp",
        method: 'GET'
    });
}


export function getProjectById(id_project){
    return request({
        url: API_BASE_URL + "/api/v1/project/get/"+id_project,
        method: 'GET'
    });
}

export function getUserById(idUser){
    return request({
        url: API_BASE_URL + "/api/v1/user/get/"+idUser,
        method: 'GET'
    });
}

export function valideProject(id_project){
    return request({
        url: API_BASE_URL + "/api/v1/project/valideProject/"+id_project,
        method: 'GET'
    });
}


export function getAllListTask(id_projet){
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/api/v1/project/"+id_projet+"/alltaskflow",
        method: 'GET'
    });
}

export function addTaskToFlow(task , listID){
    return request({
        url: API_BASE_URL + "/api/v1/listeTaches/addTache/"+listID,
        method: 'POST',
        body: JSON.stringify(task)
    });
}

export function addUserToService(idService , idUser){
    return request({
        url: API_BASE_URL + "/api/v1/service/"+idService+"/addEmp/"+idUser,
        method: 'GET'
    });
}

export function deleteUserFromService(idService , idUser){
    return request({
        url: API_BASE_URL + "/api/v1/service/"+idService+"/deleteEmp/"+idUser,
        method: 'GET'
    });
}

export function getAllProjectsAdmin(){
    return request({
        url: API_BASE_URL + "/api/v1/project/getAll",
        method: 'GET'
    });
}

export function approuveProject(idProject){
    return request({
        url: API_BASE_URL + "/api/v1/project/"+idProject+"/approuved",
        method: 'GET'
    });
}

export function desapprouveProject(idProject){
    return request({
        url: API_BASE_URL + "/api/v1/project/"+idProject+"/desapprouved",
        method: 'GET'
    });
}



export function getAllProjects(){
    return request({
        url: API_BASE_URL + "/api/v1/service/getProjects",
        method: 'GET'
    });
}

export function addTaskflow(id_project , taskflow){
    return request({
        url: API_BASE_URL + "/api/v1/project/addtaskflow/"+id_project,
        method: 'POST',
        body: JSON.stringify(taskflow)
    });
}


export function addNewProject(project){
    return request({
        url: API_BASE_URL + "/api/v1/project/add",
        method: 'POST',
        body: JSON.stringify(project)
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}