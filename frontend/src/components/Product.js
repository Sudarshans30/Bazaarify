import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product}) => {
  return (
    <Card className = 'my-4 p-4 rounded'>
        <a href = {`/product/${product._id}`}>

            <Card.Img src={product.image} variant = 'top' />
        </a>

        <Card.Body>
            <a href ={ `/product/${product._id}`}>
                <Card.Title as ='div'>
                    <strong> {product.name } </strong>
                </Card.Title>
            </a>

            <Card.Text as = 'div'> 
            <Rating 
            value ={product.rating}
            text={`  ${product.numReviews} review `
             }
           />
            </Card.Text>

            <Card.Text as ='h4'> ${product.price}
            </Card.Text>
            </Card.Body>



    </Card>
    
  )
}

export default Product