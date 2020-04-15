import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import Item from "../components/Item";

function Cart() {
  const { cartItems, setCartItems } = useContext(MyContext);
  const [textButton, setTextButton] = useState("Place Order");
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item) => (
    <Item key={item.id} item={item} />
  ));

  const placeOrder = () => {
    if (cartItems.length > 0) {
      setTextButton("Ordering...");
      setTimeout(() => {
        setCartItems([]);
        setTextButton("Place Order");
        console.log("Order Placed!");
      }, 3000);
    }
  };

     
const placeOrderButton = (<div className="order-button"><button onClick={()=> placeOrder()}>{textButton}</button></div>)

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {cartItems.length > 0 ? placeOrderButton :  (<p>You have no items in your cart.</p>)}
    </main>
  );
}

export default Cart;
