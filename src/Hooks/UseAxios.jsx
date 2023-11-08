import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://service-swap-hub-server.vercel.app',
    withCredentials: true
});


const UseAxios = () => {

  

    return axiosSecure
};

export default UseAxios;

