import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-playFair max-w-screen-2xl mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;