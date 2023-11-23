import { FaArrowCircleRight } from "react-icons/fa";

const Functions = () => {
  return (
    <div className="h-[100vh] w-11/12 mx-auto">
      <div className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12 ">
        What can I do with it?
      </div>
      <div className="flex justify-center items-center">
        <div className="text-2xl text-gray-800 flex-1 flex justify-center">
          <ol className="space-y-7">
            <li> <div className="flex items-center gap-2"><FaArrowCircleRight /> Efficiently Organize and Handle Inventory</div></li>
            <li> <div className="flex items-center gap-2"><FaArrowCircleRight /> Immersive Management Experience</div></li>
            <li> <div className="flex items-center gap-2"><FaArrowCircleRight /> Data Driven and Insightful Analytics & Reports</div></li>
            <li> <div className="flex items-center gap-2"><FaArrowCircleRight /> Secure Transmission of Data</div></li>
            <li> <div className="flex items-center gap-2"><FaArrowCircleRight /> Subscription plan for increasing product limit</div></li>
          
          </ol>
        </div>
        <div className="flex-1">
          <img src='https://i.ibb.co/Btqf4hg/undraw-Software-engineer-re-tnjc.png' alt="" />

        </div>
      </div>
    </div>
  );
};

export default Functions;