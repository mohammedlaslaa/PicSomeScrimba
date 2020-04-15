import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const { deleteImageFromCart } = useContext(MyContext);
//   const [trashHover, setTrashHover] = useState(false);
  const [hovered, ref] = useHover();

  return (
    <div className="cart-item">
      <i
        className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
        ref={ref}
        onClick={() => deleteImageFromCart(item.id)}
      ></i>
      <img src={item.url} width="130px" alt="Must to be added" />
      <p>
        {(5.99).toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
      </p>
    </div>
  );
}

export default CartItem;
