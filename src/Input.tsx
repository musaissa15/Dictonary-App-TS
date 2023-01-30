import React, { FormEventHandler, ChangeEventHandler } from "react";

type Props = {};

const Input = (props: Props) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement> 
	): void => {
		console.log(event.target.value);
		console.log(event);
	};

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
