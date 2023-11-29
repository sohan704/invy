import { useEffect, useState } from "react";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { Helmet } from "react-helmet-async";

const Manageshop = () => {
  const axiosPublic = UseAxiosPublic();
  const [allShops, setAllShops] = useState(null);
  const fetchShop = async () => {
    const res = await axiosPublic.get('/allShops');
    setAllShops(res.data);
  }

  useEffect(() => {
    fetchShop();
  }, [])


  const cutWords = (desc) => {
    const descArray = desc.split(' ');
    const firstFiveWords = descArray.slice(0, 5);
    const result = firstFiveWords.join(' ');
    return result;
  }

  console.log(allShops);
  return (
    <div className="h-screen">
       <Helmet>
      <title>Invy | Admin | Manageshop</title>
       </Helmet>
      <div className="overflow-x-auto">
        <table className="table mb-28">
          {/* head */}
          <thead className="text-3xl text-gray-700">
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Logo</th>
              <th>Product Limit</th>
              <th> Description</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody className="text-2xl border-t-2 border-gray-800">


            {
              allShops && allShops?.map((product, idx) => {

                return <tr key={idx + 1} className="border-b-2 border-gray-400">
                  <th>
                    <label>
                      {idx + 1}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{product?.shopName}</div>

                      </div>
                    </div>
                  </td>
                  <td>
                    <img className="h-[80px] w-[80px] object-cover" src={product?.shopLogo} alt="" />
                  </td>
                  <td className="text-3xl text-center">{product?.productLimit}</td>
                  <th>
                    <div className="dropdown dropdown-hover">
                      <div tabIndex={0} role="button" className="btn btn-outline m-1">
                        {`${cutWords(product?.shopInfo)}...`}</div>
                      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{product?.shopInfo}</li>
                      </ul>
                    </div>
                  </th>
                  <th className="space-x-2">
                    <button className="text-xl btn btn-neutral">Send Notice</button>


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

export default Manageshop;