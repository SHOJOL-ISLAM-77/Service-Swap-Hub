import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:7000',
    withCredentials: true
});


const UseAxios = () => {

  

    return axiosSecure
};

export default UseAxios;

