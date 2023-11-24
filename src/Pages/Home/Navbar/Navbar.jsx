import { FaPlayCircle, FaTools } from "react-icons/fa";

const Navbar = () => {
  

  const links = <>
    <div className="flex flex-col lg:flex-row text-sm lg:text-3xl justify-center items-center gap-5">
      <li>Home</li>
      <li>Create-Store</li>
      <li> <span><FaPlayCircle /> Watch Video </span> </li>
    </div>
  </>

  return (
    <div className="relative">
      <div className="navbar absolute z-10 opacity-100 lg:opacity-90 bg-white">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              {
                links
              }
            </ul>
          </div>
          <div className="flex text-xl md:text-2xl justify-center gap-1 items-center"><FaTools /><a className="font-bold text-xl md:text-3xl">Invy</a></div>
          {/* <div className="flex justify-center gap-1 items-center"><img className="h-[30px] w-[30px] pt-1 object-contain" src='https://i.ibb.co/5GXj38c/wrench.png' alt="" /><a className="font-bold text-2xl">Invy</a></div> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn  btn-neutral  text-sm  md:text-xl">Login</a>
          <a className="btn btn-neutral text-sm  md:text-xl">Register</a>

        </div>
      </div>
    </div>
  );
};

export default Navbar;