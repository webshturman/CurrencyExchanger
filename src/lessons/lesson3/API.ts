import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
    // baseURL: 'http://img.omdbapi.com',
};
const key = '/?apikey=dc9dd55c';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`
        return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
