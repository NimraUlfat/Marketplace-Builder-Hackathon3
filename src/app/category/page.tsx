'use client'

import Image from 'next/image';
import Frame56 from "../../../public/images/Frame56.png";
import Frame57 from "../../../public/images/Frame57.png";
import Frame58 from "../../../public/images/Frame58.png";
import Frame33 from "../../../public/images/Frame33.png";
import Frame34 from "../../../public/images/Frame34.png";
import Frame38 from "../../../public/images/Frame38.png";
import Frame45 from "../../../public/images/Frame45.png";
import React from 'react';

export default function Home() {
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 500]);
  const [selectedSize, setSelectedSize] = React.useState<string>('');
  const [selectedDressStyle, setSelectedDressStyle] = React.useState<string>('');
  const [selectedTshirtName, setSelectedTshirtName] = React.useState<string>(''); // Track selected t-shirt name

  // Mock products data (for dynamic rendering)
  const products = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: 145, color: 'red', image: Frame56, rating: 4.5, size: 'Medium', style: 'Casual', inStock: true },
    { id: 2, name: 'Polo with Tipping Details', price: 180, color: 'blue', image: Frame57, rating: 3.5, size: 'Large', style: 'Sporty', inStock: false },
    { id: 3, name: 'Black Striped T-shirt', price: 120, color: 'black', image: Frame58, rating: 4.5, size: 'Small', style: 'Casual', inStock: true },
    { id: 4, name: 'Skinny Fit Jeans', price: 240, color: 'blue', image: Frame33, rating: 4.5, size: 'Medium', style: 'Casual', inStock: true },
    { id: 5, name: 'Checkered Shirt', price: 180, color: 'green', image: Frame34, rating: 3.5, size: 'Large', style: 'Formal', inStock: false },
    { id: 6, name: 'Sleeve Striped T-shirt', price: 130, color: 'yellow', image: Frame38, rating: 4.5, size: 'Small', style: 'Sporty', inStock: true },
  ];

  // Filtered products based on selected filters
  const filteredProducts = products.filter(product =>
    (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
    (product.price >= priceRange[0] && product.price <= priceRange[1]) &&
    (selectedSize ? product.size === selectedSize : true) &&
    (selectedDressStyle ? product.style === selectedDressStyle : true) &&
    (selectedTshirtName ? product.name === selectedTshirtName : true) // Filter by t-shirt name
  );

  // Toggle selected color
  const toggleColor = (color: string) => {
    setSelectedColors(prevColors =>
      prevColors.includes(color)
        ? prevColors.filter(c => c !== color)
        : [...prevColors, color]
    );
  };

  // Handle price range change
  const handlePriceChange = (event: { target: { value: string; }; }) => {
    const newRange = event.target.value.split(',');
    setPriceRange([parseInt(newRange[0]), parseInt(newRange[1])]);
  };

  // Clear filters
  const clearFilters = () => {
    setSelectedColors([]);
    setPriceRange([0, 500]);
    setSelectedSize('');
    setSelectedDressStyle('');
    setSelectedTshirtName(''); // Clear selected t-shirt name filter
  };

  // Handle t-shirt name selection
  const handleTshirtNameClick = (name: string) => {
    setSelectedTshirtName(name);
  };

  return (
    <div className="flex bg-white min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-5 space-y-8">
        <div>
          <h3 className="font-bold text-lg text-gray-800">Filters</h3>
        </div>

        {/* T-shirt Names */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">T-Shirt Names</h4>
          <ul className="space-y-2 mt-2">
            {['Gradient Graphic T-shirt', 'Polo with Tipping Details', 'Black Striped T-shirt', 'Skinny Fit Jeans', 'Checkered Shirt', 'Sleeve Striped T-shirt'].map(name => (
              <li key={name}>
                <button
                  className="text-gray-600"
                  onClick={() => handleTshirtNameClick(name)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Slider */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">Price Range</h4>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={priceRange.join(',')}
            onChange={handlePriceChange}
            className="w-full mt-2"
          />
          <div className="flex justify-between text-sm mt-1 text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">Color</h4>
          <div className="flex space-x-2 mt-2">
            {['red', 'blue', 'green', 'yellow', 'purple', 'black', 'gray', 'orange', 'white', 'pink'].map(color => (
              <div
                key={color}
                onClick={() => toggleColor(color)}
                className={`w-6 h-6 rounded-full cursor-pointer ${selectedColors.includes(color) ? 'border-4 border-blue-500' : ''}`}
                style={{ backgroundColor: color }}  // Inline style to set background color
              ></div>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">Size</h4>
          <div className="mt-2">
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2 text-black border border-gray-300 rounded-md"
            >
              <option value="">Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </select>
          </div>
        </div>

        {/* Dress Style Selection */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">Dress Style</h4>
          <div className="mt-2">
            <select
              value={selectedDressStyle}
              onChange={(e) => setSelectedDressStyle(e.target.value)}
              className="w-full p-2 text-black border border-gray-300 rounded-md"
            >
              <option value="">Select Style</option>
              <option value="Casual">Casual</option>
              <option value="Formal">Formal</option>
              <option value="Sporty">Sporty</option>
              <option value="Party">Party</option>
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={clearFilters}
          className="mt-4 text-sm text-blue-500"
        >
          Clear Filters
        </button>
      </div>

      {/* Main Products Grid */}
      <div className="w-3/4 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-5 cursor-pointer">
              <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <Image src={product.image} alt={product.name} className="h-full w-full object-contain" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <div className="flex items-center mt-2">
                  {/* Star Rating */}
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill={i < product.rating ? "currentColor" : "none"}
                      className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
                    </svg>
                  ))}
                  <p className="text-sm text-gray-600 mt-1">{product.rating}/5</p>
                </div>
                <h4 className="text-lg text-gray-800 font-bold mt-4">${product.price}</h4>
                {/* Stock Status */}
                <p className={`text-sm mt-2 ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Banner */}
      <div className="relative flex items-center justify-center flex-1">
        <Image
          src={Frame45}
          alt="Fashion"
          className="w-[1,240px] h-[180px] object-cover "
        />
      </div>
    </div>
  );
}
