const Download = () => {
  return (
    <div>
      <div className=" text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12 ">
        Download Our Mobile App
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
        <div className="flex-1">
          <img src="https://i.ibb.co/vLQgbxZ/undraw-Download-re-li50.png" alt="" />
        </div>
        <div className="flex-1 text-xl">
          <ul className="timeline timeline-vertical">
            <li>

              <div className="timeline-start timeline-box"><div className="dropdown dropdown-hover">
                <label tabIndex={0} className="m-1">Google PlayStore</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-white text-primary-content">
                    <div className="card-body">
                      <h3 className="card-title text-gray-700">More than 3M+ Downloads on PlayStore</h3>
                      <button className="btn btn-neutral"><a href="https://play.google.com/">Download</a></button>
                    </div> </div></li>

                </ul>
              </div></div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box"><div className="dropdown dropdown-hover">
                <label tabIndex={0} className="m-1">AppStore</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-white text-primary-content">
                    <div className="card-body">
                      <h3 className="card-title text-gray-700">More than 2M+ Downloads on App Store</h3>
                      <button className="btn btn-neutral"><a href="https://www.apple.com/app-store/">Download</a></button>
                    </div> </div></li>

                </ul>
              </div></div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box"><div className="dropdown dropdown-hover">
                <label tabIndex={0} className="m-1">Amazon AppStore</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-white text-primary-content">
                    <div className="card-body">
                      <h3 className="card-title text-gray-700">More than 1M+ Downloads on Amazon App Store</h3>
                      <button className="btn btn-neutral"><a href="https://www.amazon.com/">Download</a></button>
                    </div> </div></li>

                </ul>
              </div></div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box"><div className="dropdown dropdown-hover">
                <label tabIndex={0} className="m-1">Samsung Galaxy Store</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-white text-primary-content">
                    <div className="card-body">
                      <h3 className="card-title text-gray-700">More than 1M+ Downloads on Samsung Galaxy Store</h3>
                      <button className="btn btn-neutral"><a href="https://galaxystore.samsung.com/games">Download</a></button>
                    </div> </div></li>

                </ul>
              </div></div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box"><div className="dropdown dropdown-hover">
                <label tabIndex={0} className="m-1">Huawei AppGallery</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-white text-primary-content">
                    <div className="card-body">
                      <h3 className="card-title text-gray-700">More than 4M+ Downloads on Huawei AppGallery</h3>
                      <button className="btn btn-neutral"><a href="https://consumer.huawei.com/en/mobileservices/appgallery/">Download</a></button>
                    </div> </div></li>

                </ul>
              </div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Download;