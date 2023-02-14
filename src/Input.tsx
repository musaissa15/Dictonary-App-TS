import React, { useEffect, useState  } from "react";
import { getWordData } from "./API";
type Props = {
	searchWord: string;
	setSearchWord: (value: string) => void;
};

const Input = (props: Props) => {
	const [wordInfo,setWordInfo]=useState<any[]>([])
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		props.setSearchWord(event.target.value);
	};

	const asyncData = async () => {
		try {
			const dataFromApi = await getWordData(props.searchWord);
			setWordInfo(dataFromApi);
		} catch(error: any) {
			console.log(error);
			
		}
	};
	useEffect(() => {
		asyncData();
	}, [props.searchWord]);



	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={props.searchWord} />
				<button type="submit"> Search</button>
			</form>
			<ul>
				{wordInfo.map((w) => {
					console.log(w.meanings[0].definitions[0].definition);

					return (
						<li key={w.word}>
							<h1>{w.word}</h1>
							<h5> {w.phonetic} </h5>
							{/* <p> {w.meanings.definitions[0].definition}</p> */}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Input;
