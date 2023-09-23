import React from 'react';

function ViewAccident() {
  // Define an array of product objects
  const products = [
    {
      name: "Apple MacBook Pro 17\"",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: "$799",
    },
    {
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: "$999",
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[10rem] ml-[-9rem] mr-[4rem]">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className={(index % 2 === 0) ? "bg-white border-b dark:bg-gray-900 dark:border-gray-700" : "border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="px-6 py-4">
                {product.color}
              </td>
              <td className="px-6 py-4">
                {product.category}
              </td>
              <td className="px-6 py-4">
                {product.price}
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAccident;
