import { useRef, useEffect } from "react";
import './modal.scss'

const Modal = ({ children, isOpen }) => {
	const dialogRef = useRef(null);

	// Effect to handle dialog state based on the isOpen prop
	useEffect(() => {
		if (isOpen) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [isOpen]);

	return (
		<dialog className="dialog" ref={dialogRef}>	
			{children}
		</dialog>
	);
};

export default Modal;