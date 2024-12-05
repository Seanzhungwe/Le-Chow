import { useState } from 'react';
import { GoPencil } from 'react-icons/go';
import { FaCamera } from 'react-icons/fa';
// import { FaTrash } from 'react-icons/fa';
import Backbtn from '../Components/Backbtn/Backbtn';
// Default profile picture (can be replaced with an actual URL or image)
import defaultProfilePic from '../assets/Images/hat.svg';

const Profile = () => {
  // State for username, email, and profile picture
  const [username, setUsername] = useState('John Doe');  // Default username
  const [email, setEmail] = useState('johndoe@example.com'); // Default email
  const [profilePic, setProfilePic] = useState(defaultProfilePic); // Default profile picture
  const [isEditing, setIsEditing] = useState(false); // Toggle for editing mode

  // Handle username change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle email change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle profile picture upload
  const handleProfilePicUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Set uploaded image as profile picture
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle profile picture delete
  const handleProfilePicDelete = () => {
    setProfilePic(defaultProfilePic); // Reset to default image
  };

  // Handle form submit (for demonstration purposes)
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    console.log('Profile Updated:', { username, email, profilePic });
  };

  return (

   
    <div className="max-w-lg mx-auto p-6 rounded-lg shadow-md">
       <Backbtn/>
      {/* Header */}
      <div className="flex items-center m-6">
        <h2 className="text-2xl font-bold text-white">Profile</h2>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center mb-6 relative">
        <img
          src={profilePic}
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-gray-400"
        />
        {/* Edit button */}
        <div className="display flex absolute bottom-0 right-50 p-2 rounded-full shadow-md">
          <label htmlFor="profilePic" className="cursor-pointer text-blue-500">
            <FaCamera />
          </label>
          <input
            id="profilePic"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleProfilePicUpload}
          />
        </div>
        {/* Delete Profile Picture */}
        <button
          onClick={handleProfilePicDelete}
          className="absolute top-0 right-0 text-red-500"
        >
          {/* <FaTrash/> */}
        </button>
      </div>

      <button
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? 'Save' : <GoPencil className=' position absolute right-60' />}
      </button>

      {/* Username */}
      <div className="">
        <label htmlFor="username" className="block text-lg font-semibold text-gray-400">
          Name
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className={`w-full p-3 ${isEditing ? ' border-[#00FC2A]' : 'border-none'}`}
          readOnly={!isEditing}
        />
      </div>

      {/* Email */}
      <div className="mb-[5px]">
        <label htmlFor="email" className="block text-lg font-semibold text-gray-400">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={`w-full p-3 ${isEditing ? 'border-b-4 border-[#00FC2A]' : 'border-none'}`}
          readOnly={!isEditing}
        />
      </div>

      {/* Save or Cancel changes based on editing mode */}
      {isEditing && (
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className=" savebtn w-full py-3ext-white rounded-lg "
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
