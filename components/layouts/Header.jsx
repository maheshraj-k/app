import React from "react"
export default function Header () {
        return ( 
     <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">

          <h1><b>3rd Ain Dress Gallery </b></h1>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Search for Products,Brands and More ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" className="-dOa_b L_FVxe" width="24" height="24"></img>
        <button className="btn" id="login_btn">Login</button>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" className="_1XmrCc" width="20" height="24"></img>
          <button className="btn" id="login_btn">Cart</button>
       <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" className="_1XmrCc"></img>
       <button className="btn" id="login_btn">Become a Seller</button>
      <img className="-dOa_b" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" width="24" height="24" alt="Dropdown with more help links"></img>
      <button className="btn" id="login_btn"></button>
      </div>
    </nav>    
    )
    }
