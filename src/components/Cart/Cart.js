import React from 'react';
import './Cart.css'

const Cart = (props) => {
const {img, name} = props.item;
    return (
        <div>
            <div className='cart-content'>
                <img className='cart-img' src={img} alt="product img" />
                <p className='cart-text'>{name}</p>
            </div>
        </div>
    );
};

export default Cart;
