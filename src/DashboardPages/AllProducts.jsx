import { FaEdit, FaTrash } from "react-icons/fa";
import UseMyProducts from "../Hooks/UseMyProducts";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useState } from "react";

const AllProducts = () => {

  const axiosPublic = UseAxiosPublic();

  
  const [refetch, myProductList] = UseMyProducts();
  console.log(myProductList);
  
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



  return (
    <div className="h-screen">
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

                      <button className="text-3xl btn text-sky-500"><FaEdit></FaEdit></button>
                    </th>

                  </tr>
                })
              }
          





          </tbody>



        </table>
      </div>
    </div>
  );
};

export default AllProducts;