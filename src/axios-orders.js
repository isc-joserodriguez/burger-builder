import axios from 'axios';

const instance = axios.create({
    baseURL: 'gs://react-burger-builder-aecb3.appspot.com/'
});

export default instance;