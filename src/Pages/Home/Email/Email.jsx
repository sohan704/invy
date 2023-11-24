const Email = () => {
  return (
    <div className="my-44">
      <div className="text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12">
        Sign Up For Updates & Latest Deals
      </div>
      <div className="flex justify-center">
        <div className="join">
          <input className="input input-bordered join-item" placeholder="Email" />
          <button className="btn join-item rounded-r-full">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Email;