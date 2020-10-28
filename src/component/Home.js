import React from 'react';
import Product from "../component/Product";
import pict from '../assets/img/hd.jpg'
import '../assets/css/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                     src={pict}
                     alt=""
                />
                <div className="home_row">
                    <Product
                        id="12345"
                        title="The Lean Start Up"
                        price={29.99}
                        image=
                            "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id="12345"
                        title="The Lean Start Up"
                        price={29.99}
                        image=
                            "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </div>
    );
};

export default Home;
