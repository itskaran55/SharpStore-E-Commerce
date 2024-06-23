import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <div className='mainApp'>
        <CartProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Registration />} />
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
        </CartProvider>
    </div>
  );
};

export default App;
