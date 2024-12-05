
import Vegan from '../../assets/Images/vegan.jpeg';
import lemonade from '../../assets/Images/lemonade.jpeg';

import { GoX } from 'react-icons/go'
import { useState } from 'react';
import './Feed.css'

const Modal = ({ isOpen, closeModal, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Modal Content with larger size */}
      <div className=" modal bg-black p-8 rounded-lg h-1/2 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto max-h-[90vh] overflow-y-auto relative">

        {/* Close Button positioned at the top-right */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-red-500 text-black rounded-full p-2 hover:bg-red-700 focus:outline-none"
        >
            
          <GoX/>
        </button>
        <h3 className="text-2xl font-bold mb-4">Meal prep </h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

const CardsWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <h3> MEAL PREP IDEAS FOR STARTING THE DAY</h3>
      <div className="flex flex-wrap justify-center gap-4 p-5">
        {/* Card 1 */}
        <div
          onClick={() => openModal('Some goodies to kick start your day.')}
          className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer border border-gray-300 rounded-lg shadow-lg"
        >
          <img
            className="w-full h-48 object-cover rounded-lg"
            src={lemonade}
            alt="Card 1"
          />
          <h4 className="mt-2 text-lg font-semibold"></h4>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => openModal('This is the content for Card 2.')}
          className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer border border-gray-300 rounded-lg shadow-lg"
        >
          <img
            className="w-full h-48 object-cover rounded-lg"
            src={Vegan}
            alt="Card 2"
          />
          <h4 className="mt-2 text-lg font-semibold"></h4>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} content={modalContent} />
    </div>
  );
};

export default CardsWithModal;
