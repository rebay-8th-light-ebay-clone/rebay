const axios = require('axios');

class Fetcher {
    constructor() {
        this.name = "Fetcher";
    }

    get = async (endpoint) => {
        return axios.get(encodeURI(endpoint), {
                // baseURL: 'http://localhost:4000/'
            })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error)
                return error;
            });
    }
}

export default Fetcher;