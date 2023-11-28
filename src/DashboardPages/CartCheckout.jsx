
import { useEffect, useState } from "react";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import jsPDF from "jspdf";
const CartCheckout = () => {

  const axiosPublic = UseAxiosPublic();
  const retrievedCartData = JSON.parse(localStorage.getItem('cart'));
  console.log(retrievedCartData);
 

  const doc = new jsPDF();

  const generatePdf = () => {
    const text = "Invoice";
    const fontSize = 30;
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();
    const totalPay = retrievedCartData.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.sellingPrice;
    }, 0); 

    doc.setFontSize(fontSize);
    const allProducts = retrievedCartData.map(item => {
      return item.productName;
    })

    doc.text(text, 10, 20);

    doc.setFontSize(14);

    doc.text(`Payment:- ${totalPay}$`, 10, 45);
    doc.text(`Sales Time and Date:-  ${formattedDateTime}`, 10, 70);
    doc.text(`Total Products:-  ${allProducts?.length}`, 10, 95);
    doc.text(`Shop Name:-  ${retrievedCartData[0].shop_name}`, 10, 110);
    doc.save("Invoice.pdf");
    // doc.save(`${checkoutProduct?.productName} sold at ${formattedDateTime}.pdf`);
  }
  
  useEffect(()=>{

  },[retrievedCartData]);



  const payTheDamnBill = () => {
    generatePdf();
    axiosPublic.post('/addToCart', retrievedCartData).then(res => console.log(res.data)).catch(err => console.log(err));
     
    localStorage.removeItem('cart');
    location.reload();
  }


  return (
    <div>
      <div className="my-10 text-3xl text-black text-center">
        Total Products in Cart : {retrievedCartData?.length || '0'}
        <div className="flex justify-center my-5">
          <button disabled={(retrievedCartData?.length > 0) ? false : true} onClick={payTheDamnBill} className="btn btn-outline text-2xl">PAY NOW</button>
        </div>
      </div>
      <div className="text-2xl text-center text-neutral">
        <ul>
          {retrievedCartData && retrievedCartData?.map((item, idx) => {
            return <li className="my-2" key={idx + 1}>{idx + 1}. {item.productName} - Total Sell Count {item.saleCount}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default CartCheckout;