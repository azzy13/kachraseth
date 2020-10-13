import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/Home';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/shop' component={Home} />
          <Route path='/shop/product/:id' component={ProductScreen} />
          <Route path='/shop/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
