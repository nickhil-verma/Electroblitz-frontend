import React from 'react';
import ROBSOC from "../assets/Robsoc.jpg"
import EVIMG2 from "../assets/event2.jpg"
import EVIMG3 from "../assets/event3.jpg"
import EVIMG4 from "../assets/event4.jpg"
import EVIMG5 from "../assets/event5.jpg"
import EVIMG6 from "../assets/event6.jpg"


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
      imageUrl: EVIMG6,
    },
    {
      id: 3,
      title: "PCB desgining ",
      description: "printed circuit board desgining using ki cad computer application workshop ",
      imageUrl: EVIMG3,
    },
    {
        id: 4,
        title: "SOLDERING COMPETITION",
        description: "Test your precision and speed in this hands-on soldering challenge. Compete against others to create flawless circuit connections.",
        imageUrl: EVIMG2,
      },
      {
        id: 5,
        title: "System and Antenna Design using MATLAB",
        description: "Gain practical experience in designing and simulating antenna and communication systems using MATLAB for real-world applications.",
        imageUrl: EVIMG4,
      },
      {
        id: 6,
        title: "Building Practical Circuit Board",
        description: "Learn to design, assemble, and test functional circuit boards. A hands-on experience in electronics prototyping and PCB development.",
        imageUrl: EVIMG5,
      },
      
  ];

  return (
    <div id='Events' className="bg-transparent py-16 px-4 z-20 sm:px-6 lg:px-8 relative">
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
