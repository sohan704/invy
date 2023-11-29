import { useContext, useEffect, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
const axiosPublic = UseAxiosPublic();
const CreateShop = () => {

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();
  
  const handleCreateShop = (e) => {
    e.preventDefault();
  
    console.log('Create Shop');

    const form = e.target;

    const shopName = form.name.value;
    const shopLogo = form.logo.value;
    const shopInfo = form.info.value;
    const shopLocation = form.location.value;
    const shopOwnerEmail = form.email.value;
    const ownerName = form.ownerName.value;

    const userInfo = { shopName, shopLogo, shopInfo, shopLocation, shopOwnerEmail, ownerName };

    console.log('Here are all the info ', userInfo);
    axiosPublic.post('/shops', userInfo).then(res => {
      if(res.data.insertedId){
        Swal.fire({
          title: "New Shop Created!",
          text: "Congratulation You just created a new Shop!",
          icon: "success"
        });
        navigate('/');
      }
    })
    axiosPublic.patch(`/users/${user?.email}`, userInfo).then(res => {
      if(res.data.modifiedCount >0){
        console.log('Successfully patched the new shop owner');
      }
    })

  }


  return (
    <div className='h-[170vh] my-gradient'>
      <Navbar></Navbar>
      <div className='flex justify-center items-center h-[100vh]'>

        <div className="hero h-[60vh]">
          <div className="hero-content flex-col">
            <div className="text-center flex-1 lg:text-left">
              <h1 className="text-5xl font-semibold text-[#45474B]">Create A Shop</h1>

            </div>
            <div className="flex-1 card shrink-0 w-full shadow-2xl card-my-bg">
              <form onSubmit={handleCreateShop} className="card-body">
                <div className="flex justify-between gap-5">
                  <div className="form-control">
                    <div className='text-2xl text-[#F5F7F8]'>
                      Shop Name
                    </div>
                    <input name='name' type="text" placeholder="Shop Name" className="input input-bordered text-2xl bg-[#F5F7F8]" required />
                  </div>
                  <div className="form-control">
                    <div className='text-2xl text-[#F5F7F8]'>
                      Shop Logo
                    </div>
                    <input name='logo' type="text" placeholder="Shop Logo URL" className="input input-bordered text-2xl bg-[#F5F7F8]" required />
                  </div>
                </div>
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Shop Info
                  </div>
                  <textarea name='info' type="text" placeholder="Description" className="textarea textarea-bordered textarea-lg text-2xl bg-[#F5F7F8]" required />

                </div>
                <div className="form-control">
                  <div className='text-2xl text-[#F5F7F8]'>
                    Shop Location
                  </div>
                  <input name='location' type="text" placeholder="Enter Shop Location" className="input input-bordered text-2xl bg-[#F5F7F8]" required />

                </div>
                <div className="flex justify-center gap-5">
                  <div className="form-control">
                    <div className='text-2xl text-[#F5F7F8]'>
                      Shop Owner Email
                    </div>
                    <input name='email' type="email" defaultValue={user?.email} className="input input-bordered text-2xl bg-[#F5F7F8]" required disabled />

                  </div>
                  <div className="form-control">
                    <div className='text-2xl text-[#F5F7F8]'>
                      Shop Owner Name
                    </div>
                    <input name='ownerName' type="text" defaultValue={user?.displayName} className="input input-bordered text-2xl bg-[#F5F7F8]" required disabled />

                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn border-none text-2xl bg-[#45474B] text-[#F5F7F8]">Create Shop</button>
                </div>
              </form>


            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateShop;