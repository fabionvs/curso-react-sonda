import apiService from "./api.service";

const login = (username : string, password : string) => {
    return apiService
        .post("/login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getToken = () => {
    let user = localStorage.getItem("user");
    if(typeof user === 'string'){
        return JSON.parse(user);
    }
    return null;
};


export default {
    login,
    logout,
    getToken
};