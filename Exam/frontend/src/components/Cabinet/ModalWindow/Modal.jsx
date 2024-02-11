import "./style.scss"
import { ImCross } from "react-icons/im";



export const Modal = ({ isOpen, onClose, children }) => {

    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-wrapper" >
                        <div className="modal-content">
                            <span className="modal-close-button"
                                onClick={() => onClose()}
                            >
                                <ImCross />
                            </span>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}