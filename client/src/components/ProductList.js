import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [qb, setQb] = useState([]);

  
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/products');
      await setQb(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // React Hook that executes the fetch function on the first render 
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>

      {qb.map((product) => (
        <div key={product.ID}>
          Name: {product.name} Desc: {product.description}
        </div>
      ))}
    </>
  );
};

export default ProductList;
