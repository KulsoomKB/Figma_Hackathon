import React from "react";

const AllProducts: React.FC = () => {
  // Sample data for 30 products
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `$${(index + 1) * 10}`,
    image: `/product${(index % 5) + 1}.png`, // Replace with actual product images
  }));

  return (
    
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100 h-screen overflow-auto">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Product Links */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Products</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="#product1">Product 1</a></li>
            <li><a href="#product2">Product 2</a></li>
            <li><a href="#product3">Product 3</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Gender Filter */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Gender</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Men</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Women</span>
            </label>
          </div>
        </div>

        {/* Kids Filter */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Kids</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Boy</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Girl</span>
            </label>
          </div>
        </div>

        {/* Shop by Price */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Shop by Price</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>$0 - $50</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>$51 - $100</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>$101 - $200</span>
            </label>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
