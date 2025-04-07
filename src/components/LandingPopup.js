import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const LandingPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    document.body.style.overflow = 'auto';
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-[#211951] text-white rounded-2xl shadow-2xl w-[90%] max-w-6xl h-[90vh] flex flex-col items-center justify-center animate-fade-in p-6 md:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-[#15F5BA] transition"
          onClick={handleClose}
        >
          <X size={28} />
        </button>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-[#15F5BA]">
            RoboDuel <span className='text-red-500 animate-pulse'>2025</span>
          </h1>
          <h2 className="text-sm md:text-lg font-medium text-[#ffffffaa] mt-1">
            Electroblitz DSU MAIN CAMPUS
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-6">
          {/* Left: Banner Image (80%) */}
          <div className="w-full md:w-[80%] flex justify-center items-center">
            <img
              src="https://i.ibb.co/tPPdxCDj/Robosoccer.jpg"
              alt="Banner"
              className="w-full h-auto max-h-[60vh] rounded-lg object-cover"
            />
          </div>
          <div className="hidden md:block h-[80%] w-px bg-white opacity-20" />
          {/* Right: QR Code (20%) */}
          <div className="w-full md:w-[20%] flex flex-col items-center justify-center text-center gap-3">
            <img
              src="https://i.ibb.co/qLFF2SkM/Untitled-1-1.png"  // Replace with actual QR
              alt="QR Code"
              className="w-28 h-28 object-contain border-2 border-[#15F5BA] rounded-xl"
            />
            <p className="text-sm text-[#ffffffbb]">Or register on Unstop</p>
            <a
              href="https://unstop.com/o/F2UZpeS?lb=bNbvr3U8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#15F5BA] text-[#211951] font-semibold py-2 px-4 rounded-xl hover:bg-[#836FFF] hover:text-white transition duration-300 text-sm animate-pulse">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPopup;
