import "./Carousel.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Import images for the background (you can use actual imports or any URLs)
import Beef from '../../assets/Images/food.jpeg';
import Vegan from '../../assets/Images/vegan.jpeg';
import Lemonade from '../../assets/Images/lemonade.jpeg';
import Cakes from '../../assets/Images/cakes/White-cake.jpeg'
import Desserts from '../../assets/Images/desserts/Chocolate-Tiramisu.jpeg'

export default function Carousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = [
    { title: "Beef", bgImage: Beef },
    { title: "Desserts", bgImage: Desserts },
    { title: "Vegan", bgImage: Vegan },
    { title: "Mocktails", bgImage: Lemonade },
    { title: "Cakes", bgImage: Cakes },

  ];

  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item, index) => {
            return (
              <motion.div
                className="card"
                key={item.title}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left";
                    } else if (item === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
                style={{ backgroundImage: `url(${item.bgImage})` }} // Set the background image dynamically
              >
                <h3>{item.title}</h3> {/* Custom Title */}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="buttons">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          ◀︎
        </motion.button>
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          ▶︎
        </motion.button>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "center" ? 1 : 0.7, // Adjust size here
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}
