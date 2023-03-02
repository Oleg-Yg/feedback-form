import React from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./types";
import s from "./styles.module.scss";

const Modal: React.FC<ModalProps> = ({ children, open, setOpen, title }) => {
  if (!open) return null;

  const closeHandler = () => {
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <>
      <div className={s.background} onClick={closeHandler} />
      <div className={s.modalWindow}>
        <div className={s.headerAndContent}>
          <div className={s.header}>
            <span>{title}</span>
          </div>
          <div className={s.content}>{children}</div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
