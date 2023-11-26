import { useNavigate } from 'react-router-dom';
import './Premium.css';

const Premium = () => {

  const navigate = useNavigate();

  const handlePayTen = () => {
    const price = 10;
    navigate(`stripepayment/10/200`);
  }
  const handlePayTwenty = () => {
    navigate(`stripepayment/20/450`);
  }
  const handlePayFifty = () => {
    navigate(`stripepayment/50/1500`);
  }





  return (
    <div className="h-screen">

      <div className=" text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center my-10 ">
        Subscription Plan
      </div>

      <div className="grid grid-cols-3 gap-2 pt-5 w-11/12 mx-auto">
        {/* 1 */}
        <div className="card my-animate bg-[#DDE6ED] shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/yqW3FxP/gold-bar.png" alt="Shoes" className="rounded-xl h-[150px] w-[150px] object-cover" />
          </figure>
          <div className="flex justify-center items-center py-5"><div className="badge my-animate2 badge-neutral">Stripe Payment</div></div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-[#27374D]">Limit 200</h2>
            <p></p>
            <div className="card-actions">

              <button onClick={handlePayTen} className="btn btn-neutral text-2xl btn-lg">Pay 10$</button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card my-animate bg-[#DDE6ED] shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/9TG8n0K/crown.png" alt="Shoes" className="rounded-xl h-[150px] w-[150px] object-cover" />
          </figure>
          <div className="flex justify-center items-center py-5"><div className="badge my-animate2 badge-neutral">Stripe Payment</div></div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-[#27374D]">Limit 1500</h2>
            <p></p>
            <div className="card-actions">
              <button onClick={handlePayFifty} className="btn btn-neutral text-2xl btn-lg">Pay 50$</button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card my-animate bg-[#DDE6ED] shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/NN40Fv7/diamond-1.png" alt="Shoes" className="rounded-xl h-[150px] w-[150px] object-cover" />
          </figure>
          <div className="flex justify-center items-center py-5"><div className="badge my-animate2 badge-neutral">Stripe Payment</div></div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-[#27374D]">Limit 450</h2>
            <p></p>
            <div className="card-actions">
              <button onClick={handlePayTwenty} className="btn btn-neutral text-2xl btn-lg">Pay 20$</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;