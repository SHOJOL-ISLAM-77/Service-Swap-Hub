import axios from "axios";


const axiosSecure = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7000',
});


const UseAxios = () => {
    return axiosSecure;
};

export default UseAxios;

