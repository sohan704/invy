import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: 'https://inv-man-server.vercel.app',
 
})

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  
  const {logOut} = useContext(AuthContext);


  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token');
    config.headers.authorization = `The ${token}`;
    return config;
  }, function(error){
    return Promise.reject(error);
  })




  axiosSecure.interceptors.response.use(function(response){
    return response;
  },  async (error) => {
    const status = error.response.status;
   
    console.log('Status in the interceptor',status);
    if(status === 401 || status === 403){
      await logOut();
     navigate('/login')
    }
    return Promise.reject(error);
  })





  return axiosSecure;
};

export default UseAxiosSecure;