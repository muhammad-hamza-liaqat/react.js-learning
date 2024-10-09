import React, { useContext } from 'react';
import './css.css';
import { CartContext } from '../context/CartContext';

export default function Items() {
    const cart = useContext(CartContext);
    console.log('----->', cart);

    const addToCartHandler = (itemName) => {
        const newItem = { name: itemName };
        cart.setItems([...cart.items, newItem]);
    };

    return (
        <>
            <div className='container my-4'>
                <div className='list-group'>
                    <a
                        href='#'
                        className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                    >
                        Items
                    </a>

                    <a
                        href='#'
                        className='list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between align-items-center'
                    >
                        Samsung Galaxy S24 ULTRA
                        <button
                            className='btn btn-primary'
                            onClick={() => addToCartHandler('Samsung Galaxy S24 ULTRA')} 
                        >
                            Add to Cart
                        </button>
                    </a>
                    <a
                        href='#'
                        className='list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between align-items-center'
                    >
                        Huawei P10
                        <button
                            className='btn btn-secondary'
                            onClick={() => addToCartHandler('Huawei P10')}
                        >
                            Add to Cart
                        </button>
                    </a>
                    <a
                        href='#'
                        className='list-group-item list-group-item-action list-group-item-success d-flex justify-content-between align-items-center'
                    >
                        Nokia 3310
                        <button
                            className='btn btn-success'
                            onClick={() => addToCartHandler('Nokia 3310')}
                        >
                            Add to Cart
                        </button>
                    </a>
                    <a
                        href='#'
                        className='list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center'
                    >
                        BlackBerry E15
                        <button
                            className='btn btn-danger'
                            onClick={() => addToCartHandler('BlackBerry E15')}
                        >
                            Add to Cart
                        </button>
                    </a>
                    <a
                        href='#'
                        className='list-group-item list-group-item-action list-group-item-warning d-flex justify-content-between align-items-center'
                    >
                        Oppo F15
                        <button
                            className='btn btn-warning'
                            onClick={() => addToCartHandler('Oppo F15')}
                        >
                            Add to Cart
                        </button>
                    </a>
                    <a
                        href='#'
                        className='list-group-item list-group-item-action list-group-item-info d-flex justify-content-between align-items-center'
                    >
                        Sony E12
                        <button
                            className='btn btn-info'
                            onClick={() => addToCartHandler('Sony E12')}
                        >
                            Add to Cart
                        </button>
                    </a>
                    <a
                        href='#'
                        className='list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center'
                    >
                        Vivo y12
                        <button
                            className='btn btn-light'
                            onClick={() => addToCartHandler('Vivo y12')}
                        >
                            Add to Cart
                        </button>
                    </a>
                    <a
                        href='#'
                        className='list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between align-items-center'
                    >
                        IPhone XS
                        <button
                            className='btn btn-dark'
                            onClick={() => addToCartHandler('IPhone XS')}
                        >
                            Add to Cart
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}
