import axios from 'axios';

const axiosConfig =  axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/albums'
});

export default axiosConfig;
