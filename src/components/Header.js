import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";


function Header() {
  const { cartItems } = useContext(MyContext);
  const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link> 
      <Link to="/cart">
      <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
