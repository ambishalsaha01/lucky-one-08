import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart'>
            <div>
                <h2>Selected Mobile</h2>
                <p></p>
                <button className='btn-chose'>Chose one for me</button>
                <button className='btn-chose-again'>Chose again</button>
            </div>
        </div>
    );
};

export default Cart;