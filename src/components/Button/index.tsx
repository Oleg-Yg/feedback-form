import React from "react";
import s from "./styles.module.scss";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  margin,
}) => {
  return (
    <button
      type={type}
      className={s.button}
      onClick={onClick}
      style={{ margin: margin }}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
