import React from 'react';

const DiningHallButtons = ({ onDiningHallClick }) => {
  const diningHalls = [
    "John R. Lewis & College Nine",
    "Cowell & Stevenson",
    "Crown & Merrill",
    "Porter & Kresge",
    "Rachel Carson & Oakes",
    "Cafe",
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] p-4">
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {diningHalls.map((hall) => (
          <button
            key={hall}
            onClick={() => onDiningHallClick(hall)}
            className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-lg"
          >
            {hall}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DiningHallButtons;
