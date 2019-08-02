import API_URL from 'utilities/apiEndpoint';
const axios = require('axios');

class APIHandler {
    get = async (endpoint) => {
        return axios.get(API_URL + endpoint, {
            withCredentials: true
        })
        .then(response => response.data)
        .catch(error => this.formatError(error));
    }

    post = async (endpoint, data) => {
        return axios.post(API_URL + endpoint, data, {
            withCredentials: true
        })
        .then(response => response.data)
        .catch(error => this.formatError(error));
    }

    put = async (endpoint, data) => {
        return axios.put(API_URL + endpoint, data, {
            withCredentials: true
        })
        .then(response => response.data)
        .catch(error => this.formatError(error));
    }

    delete = async (endpoint) => {
        return axios.delete(API_URL + endpoint, {
            withCredentials: true
        })
        .then(response => response)
        .catch(error => this.formatError(error));
    }

    formatError = (error) => {
        console.log(error.response);
        if (error.response.data.errors) {
            return error.response.data;
        } else {
            return {
                errors: {
                    [error.response.status]: error.response.statusText
                }
            }
        }
    }
}

export default APIHandler;