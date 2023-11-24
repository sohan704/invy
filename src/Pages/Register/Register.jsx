
import Navbar from '../Home/Navbar/Navbar';
import './Register.css';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Register = () => {
  return (
    <div className='h-[120vh] my-gradient'>
      <Navbar></Navbar>
      <div className='flex justify-center items-center h-[100vh]'>

        <div className="hero h-[60vh]">
          <div className="hero-content flex-col">
            <div className="text-center flex-1 lg:text-left">
              <h1 className="text-5xl my-animate font-semibold text-[#45474B]">Register</h1>

            </div>
            <div className="flex-1 card shrink-0 w-full max-w-sm shadow-2xl card-my-bg">
              <form className="card-body">
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Name
                  </div>
                  <input type="text" placeholder="Name" className="input input-bordered text-2xl bg-[#F5F7F8]" required />
                </div>
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Email
                  </div>
                  <input type="email" placeholder="email" className="input input-bordered text-2xl bg-[#F5F7F8]" required />
                </div>
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Password
                  </div>
                  <input type="password" placeholder="password" className="input input-bordered text-2xl bg-[#F5F7F8]" required />

                </div>
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Profile Photo
                  </div>
                  <input type="file" className="file-input border-none bg-[#F5F7F8] w-full max-w-xs" />

                </div>
                <div className="form-control mt-6">
                  <button className="btn border-none text-2xl bg-[#45474B] text-[#F5F7F8]">Register</button>
                </div>
              </form>


            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;