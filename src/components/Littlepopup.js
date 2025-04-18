import React, { useState } from 'react';
import { X } from 'lucide-react'; // You can replace with &times; if you prefer

const Littlepopup = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="hidden lg:flex fixed top-20 right-10 z-30 h-[50vh] w-[20vw] bg-[#211951] text-white rounded-xl shadow-xl flex-col items-center justify-between p-4">
      
      {/* Close Button */}
      <button
        onClick={() => setShow(false)}
        className="absolute top-2 left-2 text-white hover:text-[#15F5BA] transition"
      >
        <X size={20} />
      </button>

      {/* Heading */}
      <h2 className="text-lg font-semibold text-center text-[#15F5BA] mt-6">
        ROBODUEL 2025 <br /> <span className='text-red-500 animate-pulse'>Registration is Closed</span>
      </h2>

      {/* QR Code */}
      <img
        src="https://i.ibb.co/qLFF2SkM/Untitled-1-1.png" // Replace with your QR image
        alt="QR Code"
        className="w-24 h-24 rounded-lg border border-[#15F5BA]"
      />

      {/* Register Button */}
      <a
        href="https://unstop.com/o/F2UZpeS?lb=bNbvr3U8"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2"
      >
        <button className="bg-[#15F5BA] text-[#211951] text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#836FFF] hover:text-white transition duration-300">
          Register Now
        </button>
      </a>
    </div>
  );
};

export default Littlepopup;
