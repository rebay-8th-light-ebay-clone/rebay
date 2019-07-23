const axios = require('axios');

class Fetcher {
    get = async (endpoint) => {
        return axios.get(encodeURI(endpoint), {
                // baseURL: 'http://localhost:4000/'
            })
            .then(response => response.data)
            .catch(error => {
                console.log(error)
                return error;
            });
    }

    post = async (endpoint, data) => {
        return axios.post(
            encodeURI(endpoint), 
            data
        )
        .then(response => response.data)
        .catch(error => {
            console.log(error)
            return error;
        });
    }
}

export default Fetcher;