import { Helmet } from "react-helmet-async";
import UseAdmin from "../Hooks/UseAdmin";
import UseAdminIncome from "../Hooks/UseAdminIncome";
import UseAllProducts from "../Hooks/UseAllProducts";
import UseAllSales from "../Hooks/UseAllSales";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const Salesview = () => {

  const [, isLoading, isAdminVerify] = UseAdmin();
  const [, isSalesLoading, allSales] = UseAllSales();
  const [, productLoading, allProducts] = UseAllProducts();
  const [, incomeLoading, incomeData] = UseAdminIncome();

  if (isLoading || isSalesLoading || productLoading || incomeLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }


  if (isLoading || isSalesLoading || productLoading || incomeLoading) {
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


  const COLORS = ["#D71313", "#0D1282", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };



  return (
    <div>
      <Helmet>
        <title>Invy | Admin | Sales View</title>
      </Helmet>
      <div className="flex flex-col mx-auto lg:flex-row my-5 w-11/12">
        <div className="grid text-2xl py-4 flex-grow h-40 card bg-white border-2 border-gray-300 rounded-box place-items-center">
          <div className="text-neutral">Total Sell Count : <span className="text-gray-900 text-3xl">{allSales?.length}</span></div>
          <div className="text-neutral">Total Sell : <span className="text-gray-900 text-3xl">{totalSell.toFixed(2)} $</span></div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid text-2xl py-4 flex-grow h-40 card bg-white border-2 border-gray-300 rounded-box place-items-center">

          <div className="text-neutral">Total Product : <span className="text-gray-900 text-3xl">{allProducts?.length}</span></div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid text-2xl py-4 flex-grow h-40 card bg-white border-2 border-gray-300 rounded-box place-items-center">

          <div className="text-neutral">Admin Income : <span className="text-green-600 font-semibold text-3xl">{incomeData?.income} $</span></div>
        </div>

      </div>


      <div>
        <div className="text-2xl">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Salesview;