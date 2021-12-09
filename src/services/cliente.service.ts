import apiService from "./api.service";

const route = '/cliente';

const list = () => {
    return apiService
        .get(route)
        .then((response) => {
            return response.data;
        });
};

const create = (data : any) => {
    return apiService.post(route, data).then((response) => {
        return response.data;
    });
};

export default {
    list,
    create
};