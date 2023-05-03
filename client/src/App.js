
import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer  from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductList from './components/ProductList'


function App() {


  
  return (
    <>
    <Header />
    <main className = 'py-4'>

      

       <Container> 
       <ProductList />

       <HomeScreen /> 

      </Container> 
   

    </main>
    <Footer />
    
    </>
   
  );
}

export default App;
