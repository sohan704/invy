import axios from "axios";

const UseAxiosPublic = () => {
  
  const axiosPublic = axios.create({
    baseURL: 'https://inv-man-server.vercel.app'
  })
  // const axiosPublic = axios.create({
  //   baseURL: 'https://inv-man-server.vercel.app'
  // })

  return axiosPublic;
};

export default UseAxiosPublic;