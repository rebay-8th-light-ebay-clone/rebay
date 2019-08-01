import API_URL from 'utilities/apiEndpoint';
const axios = require('axios');

class APIHandler {
    get = async (endpoint) => {
        return axios.get(API_URL + endpoint, {
            withCredentials: true
        })
        .then(response => response.data)
        .catch(error => error);
    }

    post = async (endpoint, data) => {
        return axios.post(API_URL + endpoint, data, {
            withCredentials: true
        })
        .then(response => response.data)
        .catch(error => error);
    }
}

export default APIHandler;