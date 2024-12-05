import { GoTrash } from 'react-icons/go';
import Backbtn from '../Components/Backbtn/Backbtn';

const Saved = ({ cart, setCart }) => {
  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.title !== item.title));
    alert(`${item.title} removed from cart.`);
  };

  return (
    <div className="p-5">
         <Backbtn/>
      <h2 className="text-2xl font-bold text-center mb-8">Saved Items</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">No items saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={item.image}
                alt={item.alt}
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center"
                >
                  <GoTrash className="mr-2" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
