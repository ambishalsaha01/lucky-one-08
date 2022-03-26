import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, price, id} = props.product;
    // const {handleAddToCart} = props;
    // console.log(props)
    return (
        <div className='product-container'>
            <img src={img} alt="product-img" />
            <h2>Name: {name}</h2>
            <p>Price: ${price}</p>
            <p>id: {id}</p>
            <button onClick={()=> props.handleAddToCart(props.product)} className='btn-cart' >
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;