import React, { useEffect, useState  } from "react";
import { getWordData } from "./API";
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

	const asyncData = async () => {
		try {
			const dataFromApi = await getWordData(props.word);
			console.log(dataFromApi);
		} catch (error: any) {}
	};
	useEffect(() => {
		asyncData();
	}, [props.word]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={props.word} />
				<button type="submit"> Search</button>
			</form>
		</div>
	);
};

export default Input;
