import React, { useState } from "react";
import hero from "../image/hero.png";
import ReferModal from "./ReferModal";
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen gap-2">
        <ReferModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <div className="hero-section bg-white shadow-lg rounded-lg p-8 flex flex-wrap md:flex-nowrap">
          <div className="text-section flex-1 mr-4">
            <h1 className="text-4xl font-bold mb-4">
              Let’s Learn<br></br>& Earn
            </h1>
            <p className="text-gray-700 mb-6 text-2xl text-black-400">
              Get a chance to win<br></br> up-to{" "}
              <span className="text-blue-400 text-3xl">Rs. 15,000</span>
            </p>
            <button
              onClick={handleOpenModal}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
            >
              Refer Now
            </button>
          </div>
          <div className="image-section flex-1">
            <img
              src={hero}
              alt="Career Path"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
