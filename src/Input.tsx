import React, { useEffect, useState  } from "react";
import { getWordData } from "./API";
type Props = {
	word: string;
	setWord: (value: string) => void;
};

const Input = (props: Props) => {
	const [wordInfo, setWordInfo] = useState([])
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		props.setWord(event.target.value);
	};

	const asyncData = async () => {
		try {
			const dataFromApi = await getWordData(props.word);
			setWordInfo(dataFromApi);
		} catch (error: any) {}
	};
	useEffect(() => {
		asyncData();
	}, [props.word]);
console.log(typeof(wordInfo));

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={props.word} />
				<button type="submit"> Search</button>
			</form>
			<ul>
				{wordInfo.map((w) => {
				
				console.log(w);
				
				
				return (
					<li>
						<h2>{w['word']}</h2>
					</li>
				);
			})}
			</ul>
		</div>
	);
};

export default Input;
