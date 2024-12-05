import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./Pages/Home'));
const Gallery = lazy(() => import('./Pages/Gallery'));
const Saved = lazy(() => import('./Pages/Saved'));
const Profile = lazy(() => import('./Pages/Profile'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Ham = lazy(() => import('./Components/Ham-menu/Ham'));

// Fallback for Suspense
const Loading = () => <div>Loading...</div>;

const App = () => {
  const [cart, setCart] = useState([]); // Shared cart state

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div>
          <Ham />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery cart={cart} setCart={setCart} />} />
            <Route path="/saved" element={<Saved cart={cart} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
