import React from "react";
import myImage from "../../ProfilePhoto/me.jpg";
import { Image } from "react-bootstrap";

export const Photo = () => {
  return (
    <div>
      <Image width={300} height={400} src={myImage} />
    </div>
  );
};
