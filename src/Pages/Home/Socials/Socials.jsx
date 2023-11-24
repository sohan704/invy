import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa';

const Socials = () => {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="mt-[700px] md:mt-[900px] lg:mt-96 w-10/12 mx-auto lg:w-full">
      <div  className=" text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12 ">
       Connect on Social Media
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center pt-10 w-11/12 mx-auto">
        <div data-aos="flip-right" data-aos-duration="1600" className="flex-1">
          <img src="https://i.ibb.co/B6pZs1T/undraw-Chatting-re-j55r.png" alt="" />
        </div>
        <div className="flex-1 grid grid-cols-4 gap-2 lg:gap-10">
          <div data-aos="zoom-in"  data-aos-duration="1600" className="w-full mx-auto col-start-1 col-end-3  flex flex-col items-center gap-2 justify-center  border-gray-500 py-5 rounded-2xl ">
            <div className='text-7xl text-neutral'>
              
              <FaInstagram></FaInstagram>
              </div>
            <div className="text-lg lg:text-3xl font-semibold">
            3.2 Million
            </div>
            <div>
              <button className="btn btn-neutral"><a href="https://www.instagram.com/">FOLLOW</a></button>
            </div>
          </div>
          <div data-aos="zoom-in"  data-aos-duration="1600" className="w-full mx-auto col-start-3 col-end-5 flex flex-col items-center gap-2 justify-center border-none border-gray-500 py-5 rounded-2xl ">
          <div className='text-7xl text-neutral'>
              
              <FaSnapchat></FaSnapchat>
              </div>
            <div className="text-lg lg:text-3xl font-semibold">
              1.6 Million
            </div>
            <div>
              <button className="btn btn-neutral"><a href="https://www.snapchat.com/">FOLLOW</a></button>
            </div>
          </div>
          <div data-aos="zoom-in"  data-aos-duration="1600" className="w-full mx-auto col-start-2 col-end-4 flex flex-col items-center gap-2 justify-center  border-gray-500 py-5 rounded-2xl ">
          <div className='text-7xl text-neutral'>
              
              <FaFacebook></FaFacebook>
              </div>
            <div className="text-lg lg:text-3xl font-semibold">
              2 Million
            </div>
            <div>
              <button className="btn btn-neutral"><a href="https://www.facebook.com/">FOLLOW</a></button>
            </div>
          </div>
          <div data-aos="zoom-in"  data-aos-duration="1600" className="w-full mx-auto col-start-1 col-end-3 flex flex-col items-center gap-2 justify-center  border-gray-500 py-5 rounded-2xl ">
          <div className='text-7xl text-neutral'>
              
          <FaTwitter></FaTwitter>
              </div>
          
            <div className="text-lg lg:text-3xl font-semibold">
              4 Million
            </div>
            <div>
              <button className="btn btn-neutral"><a href="https://www.twitter.com/">FOLLOW</a></button>
            </div>
          </div>
          <div data-aos="zoom-in"  data-aos-duration="1600" className="w-full mx-auto col-start-3 col-end-5 flex flex-col items-center gap-2 justify-center  border-gray-500 py-5 rounded-2xl ">
          <div className='text-7xl text-neutral'>
              
              <FaYoutube></FaYoutube>
              </div>
            <div className="text-lg lg:text-3xl font-semibold">
              2 Million
            </div>
            <div>
              <button className="btn btn-neutral"><a href="https://www.twitter.com/">SUBSCRIBE</a></button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Socials;