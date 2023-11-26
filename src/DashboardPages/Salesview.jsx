import UseAdmin from "../Hooks/UseAdmin";
import UseAllSales from "../Hooks/UseAllSales";

const Salesview = () => {

  const [, isLoading, isAdminVerify] = UseAdmin();
  const [, isSalesLoading, allSales] = UseAllSales();

  if (isLoading || isSalesLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  console.log('all sales', allSales);
  console.log('admin verify', isAdminVerify);

  const totalSell = allSales?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.sellingPrice;
  }, 0);
  const totalInvest = allSales?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.productionCost;
  }, 0);

  const profit = totalSell - totalInvest;

  const data = [
    { name: "total Invest", value: totalInvest },
    { name: "Total Profit", value: profit },

  ];



  return (
    <div>
      <div className="flex flex-col mx-auto lg:flex-row my-5 w-11/12">
        <div className="grid text-2xl py-4 flex-grow h-40 card bg-white border-2 border-gray-300 rounded-box place-items-center">
          <div className="text-neutral">Total Sell Count : <span className="text-gray-900 text-3xl">{allSales?.length}</span></div>
          <div className="text-neutral">Total Sell : <span className="text-gray-900 text-3xl">{totalSell.toFixed(2)} $</span></div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid text-2xl py-4 flex-grow h-40 card bg-white border-2 border-gray-300 rounded-box place-items-center">

          <div className="text-neutral">Total Invest : <span className="text-gray-900 text-3xl">{totalInvest} $</span></div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid text-2xl py-4 flex-grow h-40 card bg-white border-2 border-gray-300 rounded-box place-items-center">

          <div className="text-neutral">Total Profit : <span className="text-green-600 font-semibold text-3xl">{(totalSell - totalInvest).toFixed(2)} $</span></div>
        </div>

      </div>
    </div>
  );
};

export default Salesview;