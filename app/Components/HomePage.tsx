import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Background Image */}
      <img 
        src="/Frame.png" 
        alt="Homepage Background"
        className="w-full h-auto object-cover"
      />

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
        {/* First Look Text */}
        <p className="font-bold text-xs text-black mb-2">First Look</p>

        {/* Nike Air Max Pulse Heading */}
        <h1 className="text-4xl font-bold font-[Helvetica Neue] text-black mb-4">
          NIKE AIR MAX PULSE
        </h1>

        {/* Description Paragraph */}
        <p className="text-center text-black text-sm mb-8 max-w-2xl">
          Experience the next level of comfort and style with the Nike Air Max Pulse. With a sleek design and innovative cushioning, it’s built to keep you on your feet all day long.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-600">
            Shop Now
          </button>
          <button className="px-6 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-600">
            Learn More
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="p-9 bg-gray-50">
        <h2 className="text-sm font-bold text-left text-black mb-6">Best of Air Max</h2>
        <div className="flex justify-center space-x-8">
          {/* Card 1 */}
          <div className="w-64 bg-white rounded-lg shadow-lg">
            <img
              src="/shoe1.png"
              alt="Air Max 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="font-bold text-lg text-black">Air Max 1</p>
              <p className="text-sm text-gray-600">Iconic design with timeless comfort</p>
              <p className="text-xl font-semibold text-black mt-2">$120</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-64 bg-white rounded-lg shadow-lg">
            <img
              src="shoe2.png"
              alt="Air Max 90"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="font-bold text-lg text-black">Air Max 90</p>
              <p className="text-sm text-gray-600">A blend of modern and classic style</p>
              <p className="text-xl font-semibold text-black mt-2">$140</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-64 bg-white rounded-lg shadow-lg">
            <img
              src="shoe3.png"
              alt="Air Max 97"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="font-bold text-lg text-black">Air Max 97</p>
              <p className="text-sm text-gray-600">Sleek and futuristic design</p>
              <p className="text-xl font-semibold text-black mt-2">$160</p>
            </div>
          </div>
        </div>
      </div>

 {/* Featured */}
 <div className="p-8 bg-gray-50">
        <h2 className="text-sm font-bold text-left text-black mb-6">Featured</h2>
        <div className="flex justify-center space-x-8">
          {/* Image 1 */}
          <img
            src="/Image.png"
            alt="Don't Miss Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
       

        {/* Nike Air Max Pulse Heading */}
        <h1 className="text-4xl font-bold font-[Helvetica Neue] text-black mb-4">
          STEP INTO WHAT FEELS GOOD
        </h1>

        {/* Description Paragraph */}
        <p className="text-center text-black text-sm mb-8 max-w-2xl">
          Coz Everyone should know the feeling of running in tat perfect pair.</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-600">
            Find Your Store
          </button>
</div></div>








      {/* Gear Up Section */}
      <div className="p-8 bg-gray-50">
        <h2 className="text-sm font-bold text-left text-black mb-6">Gear Up</h2>
        <div className="flex justify-center space-x-8">
          {/* Card 1 */}
          <div className="w-64 bg-white rounded-lg shadow-lg">
            <img
              src="/1.png"
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="font-bold text-sm text-black">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-xs text-gray-600">Men's Short-Sleeve Running Top</p>
              <p className="text-sm font-semibold text-black mt-2">$120</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-64 bg-white rounded-lg shadow-lg">
            <img
              src="2.png"
              alt="Nike Dri-FIT Challenger"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="font-bold text-sm text-black">Nike Dri-FIT Challenger</p>
              <p className="text-xs text-gray-600">Men's 18cm 2-in-1 Versatile Shorts</p>
              <p className="text-sm font-semibold text-black mt-2">$140</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-64 bg-white rounded-lg shadow-lg">
            <img
              src="3.png"
              alt="Nike Dri-FIT ADV Run Division"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="font-bold text-sm text-black">Nike Dri-FIT ADV Run Division</p>
              <p className="text-xs text-gray-600">Women's Long-Sleeve Running Top</p>
              <p className="text-sm font-semibold text-black mt-2">$140</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-64 bg-white rounded-lg shadow-lg">
            <img
              src="4.png"
              alt="Nike Fast"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="font-bold text-sm text-black">Nike Fast</p>
              <p className="text-xs text-gray-600">Women's Mid-Rise 7/8 Running Leggings</p>
              <p className="text-sm font-semibold text-black mt-2">$160</p>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Miss Section */}
      <div className="p-8 bg-gray-50">
        <h2 className="text-sm font-bold text-left text-black mb-6">Don't Miss</h2>
        <div className="flex justify-center space-x-8">
          {/* Image 1 */}
          <img
            src="/5.png"
            alt="Don't Miss Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          
        </div>
      </div>


      <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
{/* Nike Air Max Pulse Heading */}
<h1 className="text-4xl font-bold font-[Helvetica Neue] text-black mb-4">
          FLIGHT ESSENTIALS
        </h1>

        {/* Description Paragraph */}
        <p className="text-center text-black text-sm mb-8 max-w-2xl">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.  </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-600">
            Shop
          </button></div></div>

          <div className="p-8 bg-gray-50">
  <h2 className="text-sm font-bold text-left text-black mb-6">The Essentials</h2>
  <div className="flex justify-center space-x-8">
    {/* Card 1 */}
    <div className="w-64 bg-white rounded-lg shadow-lg">
      <img
        src="/66.png" // Replace with your actual image path
        alt="Essential 1"
        className="w-440 h-550 object-cover rounded-t-lg"
      />
     
    </div>

    {/* Card 2 */}
    <div className="w-64 bg-white rounded-lg shadow-lg">
      <img
        src="/67.png" // Replace with your actual image path
        alt="Essential 2"
        className="w-440 h-550 object-cover rounded-t-lg"
      />
      
    </div>

    {/* Card 3 */}
    <div className="w-64 bg-white rounded-lg shadow-lg">
      <img
        src="/68.png" // Replace with your actual image path
        alt="Essential 3"
        className="w-440 h-550 object-cover rounded-t-lg"
      />
    
    </div>
  </div>

 
</div>
<div className="p-8 bg-gray-100">
  <div className="max-w-5xl mx-auto text-center">
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Category 1 */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Icons</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
      </div>

      {/* Category 2 */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Shoes</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordon Shoes</li>
          <li>Running Shoes</li>
        </ul>
      </div>

      {/* Category 3 */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Clothing</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies and Pull Over</li>
          <li>Shirts and Tops</li>
        </ul>
      </div>

      {/* Category 4 */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Kids</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>Infant & Toddler Shoes</li>
          <li>Kids Shoes</li>
          <li>Kids Jordan Shoes</li>
          <li>Kids Basketball shoes</li>
        </ul>
      </div>
    </div>
  </div>
</div>
          
    </div>
  );
};

export default HomePage;
