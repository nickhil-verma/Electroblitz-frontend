import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#211951] bg-opacity-50 text-white py-12 px-4 sm:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Section: Embedded Map */}
        <div className="lg:w-1/2 w-full px-8 mb-6 lg:mb-0">
          <h2 className="text-3xl font-semibold text-white mb-4">Electroblitz | DSU Main campus <br></br> Harohalli,Ramnagra</h2>
           

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.8067176581126!2d77.4482649741663!3d12.66067442162071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae5b32ad06ec57%3A0x95e7a57b8a6b94d2!2sDayananda%20Sagar%20University%20(DSU)%20-%20Main%20Campus!5e0!3m2!1sen!2sin!4v1742114827293!5m2!1sen!2sin"
            width="400"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-md"
          />
        </div>

        {/* Right Section: Contact Form */}
        <div className="lg:w-1/2 w-full space-y-6">
          <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg">Name</label>
              <input
                type="text"
                id="name"
                className="px-4 py-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#15F5BA] placeholder-white"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Email" className="text-lg">Email</label>
              <input
                type="email"
                id="subject"
                className="px-4 py-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#15F5BA] placeholder-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg">Message</label>
              <textarea
                id="message"
                rows="4"
                className="px-4 py-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#15F5BA] placeholder-white"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              className="bg-[#15F5BA] text-[#211951] py-2 px-6 rounded-md hover:bg-[#836FFF] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
