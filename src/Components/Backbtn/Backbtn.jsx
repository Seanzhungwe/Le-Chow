import './Backbtn.css'
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const Backbtn = () => {
  const navigate = useNavigate();

  return (
    <button
    className='backbtn'
      onClick={() => navigate(-1)}
      style={{
    
        cursor: "pointer",
      }}
    >
     <FaArrowLeft/>
    </button>
  );
};

export default Backbtn;
