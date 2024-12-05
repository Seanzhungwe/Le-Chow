import './Ham.css';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='ham'>
      
    
      
      <label>
        <input type="checkbox" checked={isOpen} onChange={handleToggle} />
        <div className={`toggle ${isOpen ? 'active' : ''}`}>

          <span className="top-dot dot"></span>
          <span className="mid-dot dot"></span>
          <span className="btm-dot dot"></span>
        </div>

        <div className={`slide ${isOpen ? 'open' : ''}`}>
          <nav className="nav" id="nav">
          <ul>
              <NavLink className='link' to="/" onClick={handleToggle}>Home</NavLink>
              <NavLink className='link' to="/Gallery" onClick={handleToggle}>Gallery</NavLink>
              <NavLink className='link' to="/Profile" onClick={handleToggle}>Profile</NavLink>
              <NavLink className='link' to="/Saved" onClick={handleToggle}>Saved</NavLink>
              <NavLink className='link' to="/About" onClick={handleToggle}>About</NavLink>
              
            </ul>
          </nav>
        </div>
      </label>
    </div>
  );
};

export default Nav;
