import { useState } from "react";
import UseSales from "../Hooks/UseSales";

const SalesHistory = () => {

  const [, salesData] = UseSales();
  const [buttonNumber, setButtonNumber] = useState(1);


  const sortBySoldDate = (products) => {
    return products.sort((a, b) => {
      const dateA = new Date(a.productSoldDate);
      const dateB = new Date(b.productSoldDate);
      return dateB - dateA;
    });
  }

  const calculateTotalPages = (data) => {
    const remainder = data?.length % 5;

    if (remainder === 0) {
      const pages = (data?.length / 5);
      return pages;
    } else {
      const pages = parseInt(data?.length / 5) + 1;
      return pages;

    }
  }

  const totalPages = calculateTotalPages(salesData);


  const sortedProducts = sortBySoldDate(salesData).slice((buttonNumber-1)*5,buttonNumber*5);
  



  const handleButtonClick = (number) => {
    setButtonNumber(number);
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button className="btn btn-lg mx-3 text-3xl btn-neutral" key={i} onClick={() => handleButtonClick(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  console.log('btn num ',buttonNumber);

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
              <th>Selling Date</th>
              <th>Profit</th>

            </tr>
          </thead>
          <tbody className="text-2xl border-t-2 border-gray-800">


            {
              sortedProducts && sortedProducts?.map((product, idx) => {

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
                  <td className="text-3xl">{product?.productSoldDate
                  }</td>
                  <th>
                    <button className="text-3xl font-semibold text-green-600">{
                      (product?.sellingPrice - product?.productionCost).toFixed(2)
                    }$</button>
                  </th>


                </tr>
              })
            }






          </tbody>



        </table>
      </div>


      <div className="flex justify-center my-10">
        <div>
          {renderButtons()}
        </div>
      </div>
    </div>

  );
};

export default SalesHistory;