import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';
import Final_checkout from './Final_checkout';
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        {/* <bold className='subtotal_gift'>
                            <input type='checkbox'  className='checkbox_input' />This order contains a gift
                        </bold> */}
                    </>
                )}


                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeperator={true}
                prefix={'₹'}
            />

            <Link to='./Final_checkout'>
                <button className='checkout_button' onClick={<Final_checkout />}>Proceed to checkout</button>
            </Link>
        </div>
    )
}

export default Subtotal;
