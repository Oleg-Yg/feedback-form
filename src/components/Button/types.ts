import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
  margin?: string;
}
