import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        //Add items to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                // The syntax is :- key:value
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    };
    console.log(id);
    return (
        <div className='product'>

            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={addToBasket}>Shop Now</button>
        </div>
    )
}

export default Product
