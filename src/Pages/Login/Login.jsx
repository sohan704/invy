import { FaGoogle } from 'react-icons/fa';
import './Login.css'
import Navbar from '../Home/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {


  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then(res => {
      console.log(res.user);
      Swal.fire({
        title: `Welcome ${res.user.displayName}`,
        text: `LOGGED IN`,
        icon: "success"
      });
    }).catch(error => {
       console.log(error);
      Swal.fire({
        title: "Sorry!",
        text: `${error.message.split(' ')[2]}`,
        icon: "error"
      });
    });

  }


  return (
    <div className="h-[120vh] my-gradient">
      <Navbar></Navbar>


      <div className='flex justify-center items-center h-[100vh]'>

        <div className="hero h-[60vh]">
          <div className="hero-content flex-col">
            <div className="text-center flex-1 lg:text-left">
              <h1 className="text-5xl my-animate font-semibold text-[#45474B]">Login</h1>

            </div>
            <div className="flex-1 card shrink-0 w-full max-w-sm shadow-2xl card-my-bg">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Email
                  </div>
                  <input name='email' type="email" placeholder="email" className="input input-bordered text-2xl bg-[#F5F7F8]" required />
                </div>
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Password
                  </div>
                  <input name='password' type="password" placeholder="password" className="input input-bordered text-2xl bg-[#F5F7F8]" required />

                </div>
                <div className="form-control mt-6">
                  <button className="btn border-none text-2xl bg-[#45474B] text-[#F5F7F8]">Login</button>
                </div>
              </form>


            </div>
            <div className="divider divider-neutral text-[#F5F7F8]">OR</div>
            <div className="form-control mt-6">
              <button className="btn border-none text-2xl bg-[#45474B] text-[#F5F7F8]"> <FaGoogle></FaGoogle> Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;