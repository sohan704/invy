
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import UseShopData from '../Hooks/UseShopData';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import UseMyProducts from '../Hooks/UseMyProducts';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddProduct = () => {
  const { user } = useContext(AuthContext);
  //the shopData
  const [refetch, shopData] = UseShopData();
  const [,productData] = UseMyProducts();
  // console.log(shopData);

  const shop_id = shopData?._id;
  const shop_name = shopData?.shopName;
  const user_email = shopData?.shopOwnerEmail;
  const the_product_limit = shopData?.productLimit;
  // console.log('The product limit is ', the_product_limit);

  console.log(shop_id, shop_name, user_email);

  const currentDate = new Date();

  // Formatting the date (optional)
  const formattedDate = currentDate.toLocaleDateString();
  // console.log(formattedDate);



  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    document.getElementById('closeButton').click();
    const imageFile = { image: data.productImage[0] };
    //getting the image url
    const imgRes = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });

    // console.log(imgRes.data.data.display_url); //this is the way to get url

    const taxAmount = parseInt(data?.productionCost) * (7.5 / 100);
    const profitAmount = parseInt(data?.productionCost) * (parseInt(data?.profitMargin) / 100);

    const sellingPrice = parseInt(data?.productionCost) + taxAmount + profitAmount;


    // console.log('selling Price', sellingPrice);

    const productData = {
      ...data,
      productAddedDate: formattedDate,
      shop_id: shop_id,
      shop_name: shop_name,
      user_email: user_email,
      sellingPrice: sellingPrice,
      saleCount: 0,
      productImage: imgRes.data.data.display_url
    };
    console.log(productData); //final modification

    if (the_product_limit < 1) {
      toast.error('You have reached Product limit!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const res = await axiosSecure.post('/addProduct', productData);
    console.log('From Add Product', res.data);

    const res2 = await axiosSecure.patch(`/reduceProductLimit/${user?.email}`);
    console.log('Reduced the product limit', res2.data);

    refetch();
    if(res.data.insertedId && (res2.data.modifiedCount > 0)){
      
      Swal.fire({
        title: `${data?.productName} Added`,
        text: `You can add ${parseInt(shopData?.productLimit) - 1} more product!`,
        icon: "success"
      });
    }
  }


  //  <ToastContainer/>

  return (
    <>
      <div className='h-screen overflow-hidden'>


        <div className='border-t-2 border-b-2 border-gray-700'>
          <div className="flex justify-between gap-3 items-center py-5  w-11/12 mx-auto">
            <div className="text-2xl">Total <span className='text-black font-bold'>{shopData?.totalProductAdded}</span> Products Added</div>
            <div className='border-l-2 border-gray-700 pl-5'>
              <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-neutral text-2xl border-none bg-gray-600">
                Add Product
              </button>
            </div>
          </div>
        </div>

        <div>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-9/12 max-w-5xl">
              <form className='space-y-3 px-5' onSubmit={handleSubmit(onSubmit)}>

                <div className=" text-2xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12 ">
                  Add A Product
                </div>

                <div className='flex justify-between gap-5'>
                  <div className='w-full'>
                    <label className="label">
                      <span className="label-text text-2xl">Product Name</span>
                    </label>
                    <input {...register("productName")} type="text" placeholder="Product Name" className="input input-lg input-bordered text-black w-full" />
                  </div>

                  <div className='w-full'>
                    <label className="label">
                      <span className="label-text text-2xl">Product Quantity</span>
                    </label>
                    <input min="0" {...register("productQuantity")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered text-black w-full" />
                  </div>
                </div>

                {/* ......... */}
                <div className='flex justify-between gap-5'>
                  <div className='w-full'>
                    <label className="label">
                      <span className="label-text text-2xl">Product Location</span>
                    </label>

                    <input {...register("productLocation")} type="text" placeholder="Product Location" className="input input-lg input-bordered text-black w-full" />
                  </div>

                  <div className='w-full'>
                    <label className="label">
                      <span className="label-text text-2xl">Production Cost</span>
                    </label>
                    <input min="0" {...register("productionCost")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered text-black w-full" />
                  </div>


                </div>
                <div className='flex justify-between gap-5'>
                  <div className='w-full'>
                    <label className="label">
                      <span className="label-text text-2xl">Profit Margin</span>
                    </label>
                    <input min="0" {...register("profitMargin")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered text-black w-full" />
                  </div>

                  <div className='w-full'>
                    <label className="label">
                      <span className="label-text text-2xl">Discount</span>
                    </label>
                    <input min="0" max="100" {...register("productDiscount")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered text-black w-full" />
                  </div>


                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-2xl">Product Description</span>
                  </label>
                  <textarea {...register("productDescription")} placeholder="Product Description" className="textarea textarea-bordered text-black textarea-lg w-full" ></textarea>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-2xl">Choose Product Image</span>
                  </label>
                  <input {...register("productImage")} type="file" className="file-input file-input-bordered file-input-lg w-full max-w-xs" required />
                </div>

                <br />
                <input value='Add Product' className='btn btn-lg btn-neutral my-5' type="submit" />
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button id="closeButton" className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>



      </div>

      {/* <ToastContainer/> */}
    </>
  );
};

export default AddProduct;
