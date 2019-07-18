import axios from 'axios';

const Fetch = async (endpoint) => {
    return axios.get(encodeURI(endpoint)
        ).then(function (response) {
            return response.data.data;
        })
        .catch(function (error) {
            console.log(error)
            return error;
        });
}

export default Fetch;