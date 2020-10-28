import React from 'react'
import '../assets/css/Header.css'
import headerLogo from '../assets/img/amazon_logo.png'
import {Link} from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">

            <Link to="/">
                <img className="header_logo"
                     src ={headerLogo}
                />
            </Link>


          <div className="header_search">
              <input
                  className="header_searchInput"
                  type="text"/>
          </div>

          <div className="header_nav">
              <div className="header_option">
                  <span
                      className="header_optionLineOne">
                      Hello Guest
                  </span>
                  <span
                      className="header_optionLineTwo">
                      Sign in
                  </span>
              </div>

              <div className="header_option">
                  <span
                      className="header_optionLineOne">
                      Return
                  </span>
                  <span
                      className="header_optionLineTwo">
                      & Order
                  </span>
              </div>

              <div className="header_option">
                  <span
                      className="header_optionLineOne">
                      Your
                  </span>
                  <span
                      className="header_optionLineTwo">
                      Prime
                  </span>
              </div>

              <Link to="/checkout">
                  <div className="header_optionBasket">
                      <ShoppingBasketIcon/>
                      <span className="header_optionLineTwo
                      header_basketCount">0</span>
                  </div>
              </Link>
          </div>
        </div>
    )

}


export default Header
