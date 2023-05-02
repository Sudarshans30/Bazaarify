import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer  from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <Switch>
            <Route 
              path="/" 
              component={HomeScreen} 
              exact
            />
            <Route 
              path="/product/:index" 
              component={ProductScreen} 
              exact
            />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
