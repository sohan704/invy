import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='h-[100vh]'>


      <div className='border-t-2 border-b-2 border-gray-700'>
        <div className="flex justify-between gap-3 items-center py-5  w-11/12 mx-auto">
          <div className="text-2xl">Total 6 Products Added</div>
          <div className='border-l-2 border-gray-700 pl-5'>
            <button className="btn btn-neutral text-2xl border-none bg-gray-600" onClick={openModal}>
              Add Product
            </button>
          </div>
        </div>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded shadow-md z-10">
            <div className="flex justify-center gap-10 items-center mb-4">

              <div className=" text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12 ">
                Add A Product
              </div>
              <button onClick={closeModal} className="btn btn-square btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            {/* <p className="text-sm text-gray-700">Modal content goes here...</p> */}

            <form className='space-y-3 px-5' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex justify-center gap-5'>
                <div>
                  <label className="label">
                    <span className="label-text text-xl">Product Name</span>
                  </label>
                  <input {...register("productName")} type="text" placeholder="Product Name" className="input input-lg input-bordered w-full max-w-xs" />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-xl">Product Quantity</span>
                  </label>
                  <input min="0" {...register("productQuantity")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered w-full max-w-xs" />
                </div>
              </div>

              {/* ......... */}
              <div className='flex justify-center gap-5'>
                <div>
                  <label className="label">
                    <span className="label-text text-xl">Product Location</span>
                  </label>

                  <input {...register("productLocation")} type="text" placeholder="Product Location" className="input input-lg input-bordered w-full max-w-xs" />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-xl">Production Cost</span>
                  </label>
                  <input min="0" {...register("productionCost")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered w-full max-w-xs" />
                </div>


              </div>
              <div className='flex justify-center gap-5'>
                <div>
                  <label className="label">
                    <span className="label-text text-xl">Profit Margin</span>
                  </label>
                  <input min="0" {...register("profitMargin")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered w-full max-w-xs" />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-xl">Discount</span>
                  </label>
                  <input min="0" {...register("productDiscount")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered w-full max-w-xs" />
                </div>


              </div>

              <div>
                <textarea {...register("productDescription")} placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
              </div>

              <br />
              <input value='Add Product' className='btn btn-lg btn-neutral my-5' type="submit" />
            </form>

            {/* <button className='btn btn-neutral' onClick={closeModal}>Submit</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
