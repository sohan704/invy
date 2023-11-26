import { useContext, useState } from "react";
import UseMyProducts from "../Hooks/UseMyProducts";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProductCollection = () => {

  const navigate = useNavigate();
  const [refetch, myProductList] = UseMyProducts();
  console.log(myProductList);
   const {setCheckoutProduct} = useContext(AuthContext);
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [showAll, setShowAll] = useState(true);

  const handleSearch = () => {
    setShowAll(false);
    const foundObject = myProductList?.find(item => item._id === searchId);
    setSearchResult(foundObject);
  };

  const handleCheckOut = (product) => {
    setCheckoutProduct(product);
    navigate(`/dashboard/checkout/${product?._id}`);
  }

  console.log(searchResult);

  return (
    <div>
      <div className="h-screen">

        <div className="flex justify-center gap-2 items-center py-5 border-b-2 border-gray-700">
          <input type="text" placeholder="Type ID here" className="input input-bordered input-md w-full max-w-xs"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-neutral">Search</button>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-3xl text-gray-700">
              <tr>
                <th className="text-center">
                  <label>
                    _id
                  </label>
                </th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Selling Price</th>
                <th className="text-center" >Actions</th>
              </tr>
            </thead>
            <tbody className="text-xl border-t-2 border-gray-800">

              {showAll ? <>
                {
                  myProductList && myProductList?.map((product, idx) => {

                    return <tr key={idx + 1} className="border-b-2 border-gray-400">
                      <th>
                        <label>
                          {product?._id}
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
                      <td className="text-2xl text-gray-700 text-center">{product?.productQuantity}</td>
                      <th className="text-2xl text-center">
                        {product?.productDiscount}%

                      </th>
                      <th className="text-2xl text-green-600 text-center">
                        {product?.sellingPrice} $

                      </th>
                      <th className="space-x-2">
                        <button onClick={()=> handleCheckOut(product)} className="btn btn-neutral">Sold to Customer</button>
                      </th>

                    </tr>
                  })
                }
              </> : <tr className="border-b-2 border-gray-400">
                  <th>
                    <label>
                      {searchResult?._id}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{searchResult?.productName}</div>

                      </div>
                    </div>
                  </td>
                  <td>
                    <img className="h-[80px] w-[80px] object-cover" src={searchResult?.productImage} alt="" />
                  </td>
                  <td className="text-2xl text-gray-700 text-center">{searchResult?.productQuantity}</td>
                  <th className="text-2xl text-center">
                    {searchResult?.productDiscount}%

                  </th>
                  <th className="text-2xl text-green-600 text-center">
                    {searchResult?.sellingPrice} $

                  </th>
                  <th className="space-x-2">
                    <button onClick={()=> handleCheckOut(searchResult)} className="btn btn-neutral">Sold to Customer</button>
                  </th>

                </tr>}

             



            </tbody>



          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;