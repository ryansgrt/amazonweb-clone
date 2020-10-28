import React from 'react';
// import Header from "./component/Header";
import '../assets/css/Checkout.css'
import banner from '../assets/img/amazon_banner.jpg'
import Subtotal from "../component/SubTotal";


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                     src={banner}
                alt=""/>
                <div>
                    <h2 className="checkout_title"> Your Shopping Basket</h2>
                {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>


    );
}

export default Checkout;
