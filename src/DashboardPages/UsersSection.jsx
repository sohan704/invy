import { useEffect, useState } from "react";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
// import Salesview from "./Salesview";
import emailjs from '@emailjs/browser';

const UsersSection = () => {
  const [allUsers, setAllUsers] = useState(null);
  const [message, setMessage] = useState('');
  // const [toEmail, setToEmail] = useState('');
  const [toEmail, setToEmail] = useState('');
  const axiosPublic = UseAxiosPublic();
  const fetchUsers = async () => {
    const res = await axiosPublic.get('/users');
    setAllUsers(res.data);
  }
  //  Salesview

  useEffect(() => {
    fetchUsers();
  }, [])



  const sendEmail = (theEmail) => {


    // Your EmailJS service ID, template ID, and user ID

    const emailInfo = {theEmail, message};

    axiosPublic.post('/promoEmail',emailInfo).then(res => console.log(res.data));
  

    document.getElementById('closeButton').click();
  };



  // console.log(allUsers);

  return (
    <div className="h-screen">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-3xl text-gray-700">
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Shop Name</th>
              <th>Role</th>

            </tr>
          </thead>
          <tbody className="text-2xl border-t-2 border-gray-800">


            {
              allUsers && allUsers?.map((product, idx) => {

                return <tr key={idx + 1} className="border-b-2 border-gray-400">
                  <th>
                    <label>
                      {idx + 1}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{product?.name}</div>

                      </div>
                    </div>
                  </td>

                  <td className="text-2xl">{product?.email}</td>
                  <th>
                    <button className="text-2xl">{product?.shopName ? product?.shopName : 'No Shop'}</button>
                  </th>
                  <th className="space-x-2">
                    {product?.role ? product?.role :
                      <button onClick={() => {
                        document.getElementById('my_modal_1').showModal()
                        setToEmail(product?.email);

                        console.log('clicked', toEmail);
                      }} className="text-xl btn btn-neutral">Send Promo Email</button>
                    }


                  </th>

                </tr>
              })
            }






          </tbody>



        </table>
      </div>

      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-gray-200">
          <h3 className="font-bold text-lg my-3 text-neutral">Enter Message</h3>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What do you want to send?" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
          <div className="flex justify-start my-2">

            <button onClick={() => sendEmail(toEmail)} className="btn btn-outline text-xl">Send</button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button id="closeButton" className="btn btn-neutral">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UsersSection;