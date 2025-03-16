import React from "react";
import { GoArrowRight } from "react-icons/go"; // For the arrow icon

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 z-20 relative">
      {" "}
      {/* Added z-20 and relative positioning */}
      <div className="max-w-7xl mx-auto">
        {/* Gallery Heading */}
        <h2 className="text-4xl font-semibold text-[#15F5BA] text-center mb-8">
          Gallery
        </h2>

        {/* 3x3 Image Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-[#15F5BA] rounded-lg shadow-lg overflow-hidden"
            >
              {/* Ensure the image div is always square */}
              <div className="w-full h-0 pb-[100%] relative">
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Centered Show More Button */}
        <div className="flex justify-center">
          <button className="max-sm:text-sm border-[0.5px] text-white flex items-center justify-center hover:text-black duration-100 hover:bg-gray-100 px-4 py-2 rounded-3xl w-full max-w-xs">
            ✨ Show More
            <span>
              <GoArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
