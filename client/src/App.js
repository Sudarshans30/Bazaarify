
import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer  from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductList from './components/ProductList'

// import axios from 'axios'
// const api = axios.create({
//   baseURL: `http://localhost:3001/api/products`
// })
// api.get('/').then(res=>{
//   console.log(res.data)
// })

function App() {


  
  return (
    <>
    <Header />
    <main className = 'py-4'>

      <ProductList/>

      {/* <Container> */}
      {/* <HomeScreen /> */}

      {/* </Container> */}
   

    </main>
    <Footer />
    
    </>
   
  );
}

export default App;
