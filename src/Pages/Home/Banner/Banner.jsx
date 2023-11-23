const Banner = () => {
  return (
    <div className="relative">
      {/* <img src='https://i.ibb.co/Btqf4hg/undraw-Software-engineer-re-tnjc.png' alt="" /> */}

      <video className="w-full" autoPlay loop muted>
        <source src='./vid.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 h-full bg-gray-700 bg-opacity-60">
        <div className="flex justify-center items-center">
          <div className="text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 text-center text-white mt-40">
            Optimize Inventory
            <br />Maximize Profits
            <div className="w-5/12 text-2xl pt-6 leading-10 text-white mx-auto text-center">
              Revolutionizing inventory control: Our system maximizes efficiency, simplifies tracking, and empowers businesses of all sizes to manage and grow with ease.
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Banner;