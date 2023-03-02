import React from "react";

export interface ModalProps {
  children: React.ReactNode;
  title?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}
