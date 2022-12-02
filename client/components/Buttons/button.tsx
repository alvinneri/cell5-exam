import { Button } from "antd";
import React from "react";
import ButtonInterface from "./button.interface";

const ButtonComponent = ({
  label,
  onClick,
  styles,
  disabled = false,
  type,
}: ButtonInterface) => {
  return (
    <Button
      onClick={onClick}
      style={{ ...styles }}
      disabled={disabled}
      htmlType={type || "button"}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
