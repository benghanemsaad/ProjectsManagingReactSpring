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

export function addValidaion(id_project) {
    
    return request({
        url: API_BASE_URL + "/api/v1/project/"+id_project+"/validateproject",
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

export function getAllProjects(){
    return request({
        url: API_BASE_URL + "/api/v1/project/getAll",
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