
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Saved from './Pages/Saved'
import Profile from './Pages/Profile'
import Gallery from './Pages/Gallery'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" exact component={<Home/>} />
        <Route path="/Saved" exact component={<Saved/>} />
        <Route path="/Profile" exact component={<Profile/>} />
        <Route path="/Gallery" exact component={<Gallery/>} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default Router;