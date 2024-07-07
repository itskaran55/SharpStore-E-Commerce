import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Cart from './components/cart';
import Phones from './components/phones';
import Laptops from './components/laptops';
import Beauty from './components/beauty';
import Groceries from './components/groceries';
import { CartProvider } from 'react-use-cart';
import Mens from './components/mens';
import Womens from './components/Womens';
import Registration from './components/registration';
import Login from './components/login';
import { UserProvider, UserContext } from './components/UserContext';
import Buy from './components/Buy';
import About from './components/about';
import Contact from './components/contact';
import Admin from './components/Admin/Admin';
// import ProtectedRoute from './components/ProtectedRoute';
// import { UserContext } from './UserContext';

const App = () => {
  // const { user } = useContext(UserContext);
  return (
    <div className='mainApp'>
        <CartProvider>
          <UserProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path="/Admin/Admin"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
              <Route path='/about' element={<About/>}/>
              <Route path='/signup' element={<Registration />} />
              <Route path='/contact' element={<Contact/>} />
              <Route
                path="/buy"
                element={
                  <PrivateRoute>
                    <Buy />
                  </PrivateRoute>
                }
              />
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/phones' element={<Phones category="smartphones" />} />
              <Route path='/beauty' element={<Beauty category="beauty" />} />
              <Route path='/laptops' element={<Laptops category="laptops" />} />
              <Route path='/groceries' element={<Groceries category="groceries" />} />
              <Route path='/mens' element={<Mens category="mens-shirts" />} />
              <Route path='/womens' element={<Womens category="tops" />} />
            </Routes>
          </Router>
          </UserProvider>
        </CartProvider>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const { user } = React.useContext(UserContext);

  return user ? children : <Navigate to="/login" replace />;
};


export default App;
