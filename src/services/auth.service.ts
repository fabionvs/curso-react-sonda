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