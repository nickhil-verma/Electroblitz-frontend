import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-black bg-opacity-25 h-screen bg-transparent">
      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 text-white px-4">
        <div className="max-w-lg">
          <h1 className="text-5xl font-extrabold text-[#15F5BA] mb-4">
            ELECTROBLITZ | DSU
          </h1>
          <p className="text-xl text-[#F0F3FF] mb-4">
            Department of ECE DSU Main Branch
          </p>
          <p className="text-lg text-[#F0F3FF]">
            Welcome to the ECE Department's official club, where we empower creativity, innovation, and collaboration among students. Join us as we explore the world of electronics and communication engineering with hands-on projects, technical events, and much more.
          </p>
        </div>
      </div>

      {/* Marquee Section at the Bottom */}
      <div className="absolute bottom-0 w-full bg-[#15F5BA] bg-opacity-90 py-2">
        <div className="text-center text-[#F0F3FF] text-lg">
        <div className="w-full overflow-hidden bg-[#211951] py-2">
  <div className="whitespace-nowrap animate-scroll text-xl font-semibold text-white">
    Hurry Up! Join us on RoboDuel Championship 2025 organised by Electroblitz X Techflix @DSU, Harohalli Main Campus — 
    <a
      href="https://unstop.com/p/roboduel-championship-electroblitz-1429669?lb=bNbvr3U8"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#15F5BA] underline hover:text-[#836FFF] ml-2"
    >
      Register Now
    </a>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Hero;
