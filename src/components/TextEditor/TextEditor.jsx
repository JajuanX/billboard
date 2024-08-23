import { useState } from "react";
import './TextEditor.scss'

const TextEditor = () => {
	const [text, setText] = useState('Enter Text Here');
	const [inputShowing, setInputShowing] = useState(true);

	const toggleInputShowing = () => setInputShowing(!inputShowing);
	
	const updateText = (e) => {
		setText(e.target.value);
	}

	return (
		<main className="editor">
			<div className="editor__text-container">
				<p className="editor__text scroll-text">{text}</p>
			</div>
			<div className="editor__container">
				<button className="editor__button" onClick={toggleInputShowing}>Edit Text</button>
				{ inputShowing && <input className="editor__input" value={text} onChange={(e) => updateText(e)} />}
			</div>
		</main>
	)
}

export default TextEditor