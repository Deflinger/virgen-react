import { useRef} from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./context/ModalContext";
import "./modal.css"

interface Props {
    children: React.ReactNode
}
export const Modal = ({ children }:Props) =>{
    const modalRef = useRef<HTMLDivElement>(null);
    const {state, setState} = useModalContext();

    const closeModal = ()=> { setState(false) }

    const modalRoot = document.getElementById("modal")
    if(!state || !modalRoot){
        return null;
    }

    return createPortal(
        <div className="overlay" onClick={closeModal}>
            <div className="modal" ref={modalRef}>
                {children}
                <button className="close-button" onClick={closeModal}>Close</button>
            </div>
        </div>, modalRoot)
}