import { HTMLAttributes } from "react";
import st from "./Modal.module.scss";
import clsx from "clsx";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <>
      <div className={st.modalOverlay}></div>
      <div className={clsx(st.modalContent, props.className)}>{children}</div>
    </>
  );
};

export default Modal;
