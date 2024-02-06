import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white p-6 mt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0 mr-10 order-1 md:order-1">
          <h3 className="text-lg font-bold">About Us</h3>
          <ul>
            <li>
              Discover the latest and greatest in fashion. Our collection
              features premium products <li>for every style and occasion. From
              casual to formal, we've got you covered.</li> 
            </li>
          </ul>
        </div>

        <div className="mb-4 md:mb-0 order-2 md:order-2">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className="order-3 md:order-3">
          <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
          <input
            type="text"
            placeholder="Email Address"
            className="mt-2 p-2 w-full md:w-auto text-black rounded"
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <p>© 2023 Ekart Inc., All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
