import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa'; // React Icon for the notification bell

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Simulate an API fetch
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Replace this URL with your actual API endpoint when available
        // const response = await fetch('http://localhost:5000/notifications');
        // const data = await response.json();
        
        // Dummy notifications for now
        const data = [
          "NEW!!! Robosoccer 2025"
        ];
        
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const markAllAsRead = () => {
    setNotifications([]);
  };

  return (
    <div className="relative z-50">
      {/* Floating Notification Button */}
      <button 
        onClick={togglePopup} 
        className="fixed bottom-6 right-6 bg-[#15F5BA] text-white p-3 rounded-full shadow-lg hover:bg-[#836FFF] focus:outline-none"
      >
        <FaBell size={24} />
        {/* Notification Badge */}
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 text-xs bg-[#F0F3FF] text-[#211951] rounded-full w-5 h-5 flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Popup Notification Box */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#211951] bg-opacity-50 backdrop-blur-md flex items-center justify-center">
          <div className="bg-[#211951] text-white rounded-lg w-80 p-6 shadow-lg relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <button 
                onClick={markAllAsRead} 
                className="text-[#15F5BA] hover:text-[#836FFF] text-sm"
              >
                Mark All as Read
              </button>
            </div>
            <ul className="space-y-3">
              {notifications.length === 0 ? (
                <li className="text-center text-[#F0F3FF]">No new notifications</li>
              ) : (
                notifications.map((notification, index) => (
                  <li key={index} className="bg-[#836FFF] p-2 rounded-lg">
                    {notification}
                  </li>
                ))
              )}
            </ul>
            <button 
              onClick={togglePopup} 
              className="absolute top-2 right-2 text-[#F0F3FF] hover:text-[#15F5BA]"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
