import { Navigate, useNavigate } from "react-router-dom";

const NotOwner = () => {
  const navigate = useNavigate();
  const routeHome = () => {
     navigate('/');
  }
  return (
    <div>
      <div className=" text-2xl my-14 lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12 ">
        The Route is only for Shop Owners!
      </div>
      <div className="flex justify-center my-5">
        <button onClick={routeHome} className="btn text-3xl btn-outline">Home</button>
      </div>
    </div>
  );
};

export default NotOwner;