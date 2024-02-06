import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";


function First({ searchQuery, setSearchQuery }) {
  const [products, setProducts] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterData, setFilterData] = useState(products);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error while API fetching", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = products.filter((product) => {
      const searchMatch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const statusMatch =
        filterStatus === "" || product.category === filterStatus;

      return searchMatch && statusMatch;
    });

    setFilterData(filteredData);
  }, [searchQuery, filterStatus, products]);

  return (
    <div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mb-20 md:mt-24 p-3 ">
        <div className="sm:mx-auto text-center mt-20 ">
          <span className="text-xl md:text-2xl xl:text-4xl font-bold text-gray-800">
            <p className="mb-2 md:mb-4">Welcome To our</p>
            <span className="md:mr-8">Online store</span>
          </span>
          <div className="font-serif text-base md:text-lg xl:text-xl mt-3 text-gray-700">
            <p className="mb-2 md:mb-4">Discover the latest and greatest in fashion. Our</p>
            <p className="mb-2 md:mb-4">collection features premium products for every</p>
            <p className="mb-2 md:mb-4">style and occasion. From casual to formal,</p>
            <p>we've got you covered</p>
          </div>
        </div>
      <ImageSlider/>
      </div>

      <div className="flex justify-between mb-8 pr-3">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded-md lg:w-1/4 ml-8 sm:w-3/4"
        >
          <option value="">All Products</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filterData.length > 0 ? (
          filterData.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="mb-2 mx-auto"
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
              <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-gray-700">{product.description}</p>
              <p className="mt-2 text-green-700 font-semibold">
                Price: {product.price}
              </p>
            </div>
          ))
        ) : (
          <div className="w-full text-center">
          <img
  src="https://shahilibas.co.in/images/NoProduct.jpg"
  alt="No products available"
  className=" lg:ml-96 md:mb-24 md:mt-10"
/>

          </div>
        )}
      </div>
    </div>
  );
}

export default First;
