import './Premium.css';

const Premium = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-3 gap-2 pt-5 w-11/12 mx-auto">
        {/* 1 */}
        <div className="card my-animate bg-[#DDE6ED] shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/yqW3FxP/gold-bar.png" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="flex justify-center items-center py-5"><div className="badge my-animate2 badge-neutral">Stripe Payment</div></div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-[#27374D]">Limit 200</h2>
            <p></p>
            <div className="card-actions">
           
              <button className="btn btn-neutral text-2xl btn-lg">Pay 10$</button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card my-animate3 bg-[#DDE6ED] shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/9TG8n0K/crown.png" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="flex justify-center items-center py-5"><div className="badge my-animate2 badge-neutral">Stripe Payment</div></div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-[#27374D]">Limit 1500</h2>
            <p></p>
            <div className="card-actions">
              <button className="btn btn-neutral text-2xl btn-lg">Pay 50$</button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card my-animate bg-[#DDE6ED] shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/NN40Fv7/diamond-1.png" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="flex justify-center items-center py-5"><div className="badge my-animate2 badge-neutral">Stripe Payment</div></div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-[#27374D]">Limit 450</h2>
            <p></p>
            <div className="card-actions">
              <button className="btn btn-neutral text-2xl btn-lg">Pay 20$</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;