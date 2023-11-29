import { FaEdit, FaTrash } from "react-icons/fa";
import UseMyProducts from "../Hooks/UseMyProducts";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UseShopData from "../Hooks/UseShopData";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AllProducts = () => {

  const axiosPublic = UseAxiosPublic();
  const { register, handleSubmit } = useForm();
  const [currentId, setCurrentId] = useState('');
  const [currentProduct, setCurrentProduct] = useState(null);
  const [refetch, myProductList] = UseMyProducts();
  console.log(myProductList);

  const [shopRefetch, , shopData] = UseShopData();

  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosPublic.delete(`/product/${id}`).then(res => {
          console.log(res.data);
          Swal.fire({
            title: "Deleted!",
            text: "The Product has been deleted.",
            icon: "success"
          });
          refetch();

        });



        console.log('Product ID is ', id);
      }
    });

  }


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
    const productData = {
      ...data,
      productImage: imgRes.data.data.display_url
    };
    console.log(productData);
    toast.success('Product is being updated on the server! Thanks for your patience!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    axiosPublic.patch(`updateProduct/${currentId}`, productData)
      .then(res => {
        toast.success('Product has been updated! please refresh!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        if (res.data.insertedId) {
          toast.success('Product Updated', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          shopRefetch();
        }

      })
      .catch(error => {
        // Handle errors if any
        Swal.fire({
          title: "Sorry!",
          text: `something went wrong`,
          icon: "error"
        });
        console.error("Error:", error);
      });


  }



  return (
    <div className="h-screen">
       <Helmet>
      <title>Invy | All Product</title>
       </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-3xl text-gray-700">
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Sale Count</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody className="text-2xl border-t-2 border-gray-800">


            {
              myProductList && myProductList?.map((product, idx) => {

                return <tr key={idx + 1} className="border-b-2 border-gray-400">
                  <th>
                    <label>
                      {idx + 1}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{product?.productName}</div>

                      </div>
                    </div>
                  </td>
                  <td>
                    <img className="h-[80px] w-[80px] object-cover" src={product?.productImage} alt="" />
                  </td>
                  <td className="text-3xl">{product?.productQuantity}</td>
                  <th>
                    <button className="text-3xl">{product?.saleCount}</button>
                  </th>
                  <th className="space-x-2">
                    <button onClick={() => handleDelete(product?._id)} className="text-3xl btn text-red-400"><FaTrash></FaTrash></button>

                    <button onClick={() => {
                      document.getElementById('my_modal_1').showModal();
                      setCurrentId(product?._id);
                      setCurrentProduct(product);

                    }} className="text-3xl btn text-sky-500"><FaEdit></FaEdit></button>
                  </th>

                </tr>
              })
            }






          </tbody>



        </table>
      </div>


      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-9/12 max-w-5xl">
          <form className='space-y-3 px-5' onSubmit={handleSubmit(onSubmit)}>

            <div className=" text-2xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12 ">
              Update Product
            </div>

            <div className='flex justify-between gap-5'>
              <div className='w-full'>
                <label className="label">
                  <span className="label-text text-2xl">Product Name</span>
                </label>
                <input defaultValue={currentProduct?.productName} {...register("productName")} type="text" placeholder="Product Name" className="input input-lg input-bordered text-black w-full" />
              </div>

              <div className='w-full'>
                <label className="label">
                  <span className="label-text text-2xl">Product Quantity</span>
                </label>
                <input defaultValue={currentProduct?.productQuantity} min="0" {...register("productQuantity")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered text-black w-full" />
              </div>
            </div>

            {/* ......... */}
            <div className='flex justify-between gap-5'>
              <div className='w-full'>
                <label className="label">
                  <span className="label-text text-2xl">Product Location</span>
                </label>

                <input defaultValue={currentProduct?.productLocation} {...register("productLocation")} type="text" placeholder="Product Location" className="input input-lg input-bordered text-black w-full" />
              </div>

              <div className='w-full'>
                <label className="label">
                  <span className="label-text text-2xl">Buying Price</span>
                </label>
                <input defaultValue={currentProduct?.productionCost} min="0" {...register("productionCost")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered text-black w-full" />
              </div>


            </div>
            <div className='flex justify-between gap-5'>
              <div className='w-full'>
                <label className="label">
                  <span className="label-text text-2xl">Profit Margin</span>
                </label>
                <input defaultValue={currentProduct?.profitMargin} min="0" {...register("profitMargin")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered text-black w-full" />
              </div>

              <div className='w-full'>
                <label className="label">
                  <span className="label-text text-2xl">Discount</span>
                </label>
                <input defaultValue={currentProduct?.productDiscount} min="0" max="100" {...register("productDiscount")} type="number" placeholder="Product Quantity" className="input input-lg input-bordered text-black w-full" />
              </div>


            </div>

            <div>
              <label className="label">
                <span className="label-text text-2xl">Product Description</span>
              </label>
              <textarea defaultValue={currentProduct?.productDescription} {...register("productDescription")} placeholder="Product Description" className="textarea textarea-bordered text-black textarea-lg w-full" ></textarea>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-2xl">Choose Product Image</span>
              </label>
              <input {...register("productImage")} type="file" className="file-input file-input-bordered file-input-lg w-full max-w-xs" required/>
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
  );
};

export default AllProducts;