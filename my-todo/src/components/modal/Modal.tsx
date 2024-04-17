import React from "react";
import { createPortal } from "react-dom";
import { layoutPropos } from "../store/Store";

const Modal: React.FC<layoutPropos> = ({ children }) => {
  const domElement = document.querySelector("#portal");

  return domElement ? createPortal(children, domElement) : null;
};

export default Modal;
