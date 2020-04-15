import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import Image from "../components/Image";
import { getClass } from "../utils/index";

function Photos() {
  const {photos} = useContext(MyContext);

  const allPhoto = photos.map(
      (img, i) => <Image alt={img.id} id={img.id} img={img} className={getClass(i)} key={img.id}/>
      );

  return (
    <main className="photos">
      {allPhoto}
    </main>
  );
}

export default Photos;
