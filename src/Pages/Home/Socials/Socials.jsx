const Socials = () => {



  return (
    <div className="mt-[700px] md:mt-[900px] lg:mt-96 w-10/12 mx-auto lg:w-full">
      <div className=" text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12 ">
       Connect on Social Media
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center pt-10 w-11/12 mx-auto">
        <div className="flex-1">
          <img src="https://i.ibb.co/B6pZs1T/undraw-Chatting-re-j55r.png" alt="" />
        </div>
        <div className="flex-1 grid grid-cols-4 gap-2 lg:gap-10">
          <div className="w-full mx-auto col-start-1 col-end-3  flex flex-col items-center gap-2 justify-center  border-gray-500 py-5 rounded-2xl ">
            <img className="h-[100px] w-[100px] object-cover" src="https://i.ibb.co/r2TFVd0/instagram-1.png" alt="" />
            <div className="text-lg lg:text-3xl font-semibold">
              Followers:- 3.2 M
            </div>
            <div>
              <button className="btn btn-neutral"><a href="https://www.instagram.com/">FOLLOW</a></button>
            </div>
          </div>
          <div className="w-full mx-auto col-start-3 col-end-5 flex flex-col items-center gap-2 justify-center border-none border-gray-500 py-5 rounded-2xl ">
            <img className="h-[100px] w-[100px] object-cover" src="https://i.ibb.co/TL0nRBk/snapchat-1.png" alt="" />
            <div className="text-lg lg:text-3xl font-semibold">
              Followers:- 1.6 M
            </div>
            <div>
              <button className="btn btn-neutral"><a href="https://www.snapchat.com/">FOLLOW</a></button>
            </div>
          </div>
          <div className="w-full mx-auto col-start-2 col-end-4 flex flex-col items-center gap-2 justify-center  border-gray-500 py-5 rounded-2xl ">
            <img className="h-[100px] w-[100px] object-cover" src="https://i.ibb.co/23YK0ZH/facebook-1.png" alt="" />
            <div className="text-lg lg:text-3xl font-semibold">
              Followers:- 2 M
            </div>
            <div>
              <button className="btn btn-neutral"><a href="https://www.facebook.com/">FOLLOW</a></button>
            </div>
          </div>
          <div className="w-full mx-auto col-start-1 col-end-3 flex flex-col items-center gap-2 justify-center  border-gray-500 py-5 rounded-2xl ">
            <img className="h-[100px] w-[100px] object-cover" src="https://i.ibb.co/QMVpP3G/twitter-1.png" alt="" />
            <div className="text-lg lg:text-3xl font-semibold">
              Followers:- 4 M
            </div>
            <div>
              <button className="btn btn-neutral"><a href="https://www.twitter.com/">FOLLOW</a></button>
            </div>
          </div>
          <div className="w-full mx-auto col-start-3 col-end-5 flex flex-col items-center gap-2 justify-center  border-gray-500 py-5 rounded-2xl ">
            <img className="h-[100px] w-[100px] object-cover" src="https://i.ibb.co/NY49q1w/youtube.png" alt="" />
            <div className="text-lg lg:text-3xl font-semibold">
              Subscribers:- 2M
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