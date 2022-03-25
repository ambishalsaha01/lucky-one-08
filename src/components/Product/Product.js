import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // const {name, price} = prop;
    console.log(props)
    return (
        <div className='product-container'>
            <img src={props.img} alt="product-img" />
            <h2>Name: {props.name}</h2>
            <p>Price: ${props.price}</p>
            <p>id: {props.id}</p>
            <button className='btn-cart' onClick={() => props.handleAddToCart(props)} >
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;