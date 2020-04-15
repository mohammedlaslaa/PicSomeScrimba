import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

// import Photos from "../pages/Photos";

function Image({ className, img, alt }) {
  const [hovered, ref] = useHover();
  const { toggleFavorite, addImageToCart, cartItems, deleteImageFromCart } = useContext(MyContext);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  const cartIcon = () => {
    const compare = cartItems.find((elt) => elt.id === img.id);
    // const compare = cartItems.some((elt) => elt.id == img.id);
    if (compare) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => deleteImageFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addImageToCart(img)}
        ></i>
      );
    }
  };
  return (
    <div
      className={`${className} image-container`.trim()}
      ref={ref}
    >
      <img alt={alt} src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
