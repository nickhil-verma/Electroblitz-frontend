import React from 'react';
import ROBSOC from "../assets/Robsoc.jpg"
const Event = () => {
  const dummyEvents = [
    {
      id: 1,
      title: "Robo Soccer 2025",
      description: "two distinct robot competitions: the Obstacle Course Challenge and RoboSoccer. Teams may participate in either or both events with robots that meet the respective specifications.",
      imageUrl: ROBSOC,
    },
    {
      id: 2,
      title: "ROBOWARS",
      description: "The participants took part in the competition as a group of 4 ,there were 17 teams in total..So a total of 68 individual participants. We started the competition by 10:00AM.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      title: "TechnoBuzz 24",
      description: " ",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 4,
      title: "SOLDERING COMPETITION",
      description: "An intensive bootcamp to learn data science with hands-on projects.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 5,
      title: "Web Development Workshop",
      description: "A workshop focusing on modern web technologies and development tools.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      description: "Learn about cybersecurity principles and how to secure your systems.",
      imageUrl: "https://via.placeholder.com/400",
    },
  ];

  return (
    <div className="bg-transparent py-16 px-4 z-20 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#15F5BA] mb-8 text-center">Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyEvents.map((event) => (
            <div key={event.id} className=" border-[#15F5BA] border-[0.5px] bg-black bg-opacity-10 backdrop-blur-lg hover:scale-105  dark:bg-lessdark p-4 rounded-lg shadow-lg transition-colors duration-1000">
              {/* Image Thumbnail */}
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
              </div>

              {/* Event Description */}
              <div>
                <h3 className="text-lg text-[#15F5BA] font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
