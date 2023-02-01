import React, { FormEventHandler, ChangeEventHandler } from "react";

type Props = {
	word: string;
	setWord: (value: string) => void;
};

const Input = (props: Props) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		props.setWord(event.target.value);
		
	};
console.log(props.word);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} />
				<button type="submit"> Search</button>
			</form>
		</div>
	);
};

export default Input;
