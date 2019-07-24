const axios = require('axios');

class Fetcher {
    get = async (endpoint) => {
        return axios.get(endpoint)
            .then(response => response.data)
            .catch(error => {
                // console.log(error)
                return error;
            });
    }

    post = async (endpoint, data) => {
        return axios.post(
            endpoint, 
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