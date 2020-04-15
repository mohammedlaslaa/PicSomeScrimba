import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

function MyContextProvider(props) {
  const [photos, setPhoto] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const toggleFavorite = (id) => {
    const updatedArr = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhoto(updatedArr);
  };

  const addImageToCart = (newElement) => {
    setCartItems((oldArray) => [...oldArray, newElement]);
  };

  const deleteImageFromCart = (id) => {
    setCartItems((prevItemps) => prevItemps.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((result) => {
        setPhoto(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <MyContext.Provider
      value={{
        photos,
        toggleFavorite,
        addImageToCart,
        cartItems,
        deleteImageFromCart,
        setCartItems
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };
