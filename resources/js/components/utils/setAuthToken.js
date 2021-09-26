import axios from'axios';

const setAuthToken = token => {
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Accept'] = 'application/json'
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'bearer ' + token
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken;
