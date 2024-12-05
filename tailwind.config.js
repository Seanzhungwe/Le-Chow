import flowbite from 'flowbite/plugin';  // Import the Flowbite plugin

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",  // Add this line for Flowbite content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,  // Add the Flowbite plugin
    
  ],
};
