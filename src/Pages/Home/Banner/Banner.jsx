const Banner = () => {
  return (
    <div className="relative">
      {/* <img src='https://i.ibb.co/Btqf4hg/undraw-Software-engineer-re-tnjc.png' alt="" /> */}

      <video className="w-full" autoPlay loop muted>
        <source src='./vid.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* bg-gradient-to-r from-cyan-500 to-blue-500 */}
      {/* <h1
  class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
>
  Tailwind CSS
</h1> */}
      <div className="absolute inset-0 h-full bg-gray-700 bg-opacity-60">
        <div className="flex justify-center items-center">
          <div className="text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-slate-300 text-center text-white mt-40">
            Optimize Inventory
            <br />Maximize Profits
          </div>
        </div>
      </div>



    </div>
  );
};

export default Banner;