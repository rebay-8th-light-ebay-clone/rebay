import API_URL from 'utilities/apiEndpoint';
const axios = require('axios');

class Fetcher {
    get = async (endpoint) => {
        return axios.get(API_URL + endpoint)
            .then(response => response.data)
            .catch(error => {
                // console.log(error)
                return error;
            });
    }

    post = async (endpoint, data) => {
        return axios.post(
            API_URL + endpoint, 
            data
        )
        .then(response => response.data)
        .catch(error => {
            // console.log(error)
            return error;
        });
    }
}

export default Fetcher;