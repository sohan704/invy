import { useParams } from "react-router-dom";
import UseMyProducts from "../Hooks/UseMyProducts";
import jsPDF from "jspdf";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { toast } from "react-toastify";

const CheckoutPage = () => {

  const [, allProducts] = UseMyProducts();
  const doc = new jsPDF();
  const { id } = useParams();
  const axiosPublic = UseAxiosPublic();

  const currentDateTime = new Date();
  const formattedDateTime = currentDateTime.toLocaleString();
  const checkoutProduct = allProducts?.find(item => item._id === id);
  console.log(checkoutProduct);

  const generatePdf = () => {
    const text = "Invoice";
    const fontSize = 30;

    doc.setFontSize(fontSize);


    doc.text(text, 10, 20);

    doc.setFontSize(14);

    doc.text(`Payment:- ${checkoutProduct?.sellingPrice}$`, 10, 45);
    doc.text(`Sales Time and Date:-  ${formattedDateTime}`, 10, 70);
    doc.text(`Product Name:-  ${checkoutProduct?.productName}`, 10, 95);
    doc.text(`Shop Name:-  ${checkoutProduct?.shop_name}`, 10, 110);
    // doc.save("Invoice.pdf");
    // doc.save(`${checkoutProduct?.productName} sold at ${formattedDateTime}.pdf`);
  }

  const handleGetPaid = () => {
    generatePdf();
    const { productName, productionCost, profitMargin, productImage, productAddedDate, shop_name, sellingPrice, shop_id, productQuantity, 
    } = checkoutProduct;

    if (productQuantity < 1) {
      toast.error(`No more product left!!`, {
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

    axiosPublic.post(`/sales/${checkoutProduct?._id}`, { productName, productionCost, profitMargin, productImage, productSoldDate: formattedDateTime, productAddedDate, shop_name, sellingPrice, shop_id }).then(res => {
      toast.success('Added to Sales', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(res.data)
    });

    axiosPublic.patch(`/modifySaleCount/${checkoutProduct?._id}`).then(res => {
      toast.success('Modified Sales Count', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(res.data)
    });
  }


  return (
    <div className="h-screen">

      <div className=" text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r mt-5 from-black via-gray-500 to-gray-400 text-center">
        Checkout Page
      </div>

      <div className="flex w-11/12 mx-auto justify-center mt-7">
        <div className="flex-1 ">
          <img className="w-[350px] h-[350px] object-cover border-2 border-gray-400 rounded-lg" src={checkoutProduct?.productImage} alt="" />

        </div>
        <div className="flex-1 text-4xl">
          {checkoutProduct?.productName}
          <div className="mt-3 text-left text-neutral text-4xl">
            Price: {checkoutProduct?.sellingPrice}$
          </div>
          <div className="my-5">
            <button onClick={handleGetPaid} className="btn btn-neutral btn-lg">GET PAID</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CheckoutPage;