import React from "react";
import ImageInterface from "./image.interface";
import { Image } from "antd";

const ImageComponent = ({
  imageSrc,
  label,
  styles,
  preview,
}: ImageInterface) => {
  return (
    <Image src={imageSrc} alt={label} style={{ ...styles }} preview={preview} />
  );
};
export default ImageComponent;
