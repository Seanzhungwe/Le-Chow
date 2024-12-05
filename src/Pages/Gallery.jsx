import { useState } from 'react';
import { GoBook, GoHeart } from 'react-icons/go';
import Lemonade from '../assets/Images/lemonade.jpeg';
import Vegan from '../assets/Images/vegan.jpeg';
import Cookies from '../assets/Images/cookies/chrismas-cookies.jpeg';
import Pork from '../assets/Images/meaty/Garlic-Butter-Pork-Chops-with-Cheesy-Potato-Bake.jpeg';
import Chicken from '../assets/Images/meaty/One Pan Chicken And Potatoes.jpeg';
import Sauasage from '../assets/Images/meaty/Summer Sausage Skillet with Andouille Sausage.jpeg';
import Desserts from '../assets/Images/desserts/Homemade Iced Caramel Macchiato inspired by Starbucks.jpeg';
import Pasta from '../assets/Images/pasta/Beef Pasta in Tomato Sauce {Beef Ragu Pasta}.jpeg';
import Coffee from '../assets/Images/juices/Dalgona Coffee.jpeg';
import Swizzle from '../assets/Images/juices/Chartreuse Swizzle.jpeg';
import Pie from '../assets/Images/pies/96dcda6d-169e-4bce-a581-ba0285fc1aa7.jpeg';
import GarlicBread from '../assets/Images/pies/Fluffy Cheesy Garlic Bread _ You Need to Try.jpeg';

import './Gallery.css';

const Modal = ({ isOpen, closeModal, content, image, onAddToCart, onToggleSave, isSaved, isInCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative w-11/12 sm:w-3/4 md:w-1/2 h-3/4 rounded-lg overflow-hidden">
        <div className="modal absolute inset-0 bg-black opacity-50"></div>
        <img className="w-full h-full object-cover" src={image} alt="Modal content" />
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-white text-black rounded-full p-2 focus:outline-none"
        >
          ×
        </button>
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h3 className="text-2xl font-bold">{content.title}</h3>
          <p>{content.description}</p>
          <div className="recipe">
            <GoBook className="book" /> <p>Get recipe</p>
          </div>
          <div className="flex items-center">
           
            <button
              onClick={() => onToggleSave(content)}
              className={`mt-2 ml-4 px-4 py-2 rounded ${
                isSaved || isInCart ? 'bg-yellow-500' : 'bg-gray-300'
              } text-white`}
            >
              {isSaved ? 'Saved' : isInCart ? 'Added to Cart' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoodGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [modalImage, setModalImage] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedItems, setSavedItems] = useState([]); // State for saved items
  const [cart, setCart] = useState([]); // State for cart items

  const openModal = (content, image) => {
    setModalContent(content);
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.title} added to cart!`);
  };

  const handleToggleSave = (item) => {
    setSavedItems((prevSavedItems) => {
      if (prevSavedItems.some((savedItem) => savedItem.title === item.title)) {
        // Item is already saved, so remove it
        return prevSavedItems.filter((savedItem) => savedItem.title !== item.title);
      } else {
        // Item is not saved, so add it
        return [...prevSavedItems, item];
      }
    });
  };

  const foodItems = [
    { title: 'Pasta', description: 'A healthy and refreshing vegan salad with mixed greens and veggies.', image: Pasta, alt: 'Pasta' },
    { title: 'Garlic Bread', description: 'A juicy, delicious beef burger with fresh ingredients.', image: GarlicBread, alt: 'Garlic Bread' },
    { title: 'Lemonade', description: 'A smoothie bowl with fresh fruit toppings and granola.', image: Lemonade, alt: 'Smoothie Bowl' },
    { title: 'Vegan', description: 'A plate of creamy pasta with a rich tomato sauce.', image: Vegan, alt: 'Vegan' },
    { title: 'Sausage', description: 'A hot and cheesy pizza topped with fresh vegetables.', image: Sauasage, alt: 'Sausage' },
    { title: 'Swizzle', description: 'A refreshing glass of freshly squeezed lemonade.', image: Swizzle, alt: 'Swizzle' },
    { title: 'Pie', description: 'A delicious plate of spicy tacos with fresh toppings.', image: Pie, alt: 'Pie' },
    { title: 'Coffee', description: 'Fresh sushi rolls with fish and vegetables.', image: Coffee, alt: 'Sushi' },
    { title: 'Cookies', description: 'Fresh sushi rolls with fish and vegetables.', image: Cookies, alt: 'Cookies' },
    { title: 'Pork', description: 'Fresh sushi rolls with fish and vegetables.', image: Pork, alt: 'Sushi' },
    { title: 'Chicken', description: 'Fresh sushi rolls with fish and vegetables.', image: Chicken, alt: 'Sushi' },
    { title: 'Desserts', description: 'Fresh sushi rolls with fish and vegetables.', image: Desserts, alt: 'Sushi' },
  ];

  const filteredItems = foodItems.filter((item) =>
    item.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedItems = showMore ? filteredItems : filteredItems.slice(0, 4);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-8"> Gallery</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
    
        />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item, item.image)}
            className="cursor-pointer border border-gray-300 rounded-lg shadow-lg overflow-hidden"
          >
            <img className="w-full h-48 object-cover" src={item.image} alt={item.alt} />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-4">
        {!showMore ? (
          <button onClick={() => setShowMore(true)} className="seebtn">
            See More
          </button>
        ) : (
          <button onClick={() => setShowMore(false)} className="seebtn">
            See Less
          </button>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={modalContent}
        image={modalImage}
        onAddToCart={handleAddToCart}
        onToggleSave={handleToggleSave}
        isSaved={savedItems.some((item) => item.title === modalContent.title)}
        isInCart={cart.some((item) => item.title === modalContent.title)}
      />
    </div>
  );
};

export default FoodGallery;
