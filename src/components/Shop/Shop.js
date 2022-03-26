import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        name={product.name}
                        product={product}
                        img={product.img}
                        price={product.price}
                        id={product.id}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className="cart-header">
                    <h2>This is cart page</h2>
                </div>
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                        ></Cart>)
                }
                <div className="">
                    <button>click herwe</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;