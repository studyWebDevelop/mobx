import ReactDom from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const element = document.getElementById("modal") as HTMLElement;
  return ReactDom.createPortal(children, element);
};

export default ModalPortal;
