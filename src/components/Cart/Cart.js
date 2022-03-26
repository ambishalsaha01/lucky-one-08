import React from 'react';
import './Cart.css'

const Cart = (props) => {
const {name} = props.item;
    return (
        <div className='cart'>
            <div>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default Cart;
