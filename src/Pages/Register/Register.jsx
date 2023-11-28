import { useContext } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Register.css';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import { useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const Register = () => {

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('register is clicked');

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const user = { name, email, password, photo };


    const userInfo = { name, email, photo };


    createUser(email, password).then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(name, photo).then(() => {




        axiosPublic.post('/users', userInfo).then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: `Welcome ${name}`,
              text: "NEW USER ADDED!",
              icon: "success"
            });
            navigate('/blank');
          }
        })
      }).catch(error => console.log(error));
    })




    console.log(user);
  }




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
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Name
                  </div>
                  <input name='name' type="text" placeholder="Name" className="input input-bordered text-2xl bg-[#F5F7F8]" required />
                </div>
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
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Photo
                  </div>
                  <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered text-2xl bg-[#F5F7F8]" required />

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