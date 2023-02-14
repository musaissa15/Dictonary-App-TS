import React, { useEffect, useState  } from "react";
import { getWordData } from "./API";
type Props = {
	searchWord: string;
	setSearchWord: (value: string) => void;
};

type Dictionary = {
	word: string;
	phonetic: string;
	phonetics: {
	  text: string;
	  audio: string;
	  sourceUrl?: string;
	  license?: {
		name: string;
		url: string;
	  };
	}[];
	meanings: {
	  partOfSpeech: string;
	  definitions: {
		definition: string;
		synonyms: string[];
		antonyms: string[];
		example?: string;
	  }[];
	  synonyms: string[];
	  antonyms: string[];
	}[];
	license: {
	  name: string;
	  url: string;
	};
	sourceUrls: string[];
  }[];
const Input = (props: Props) => {
	const [wordInfo,setWordInfo]=useState<Dictionary>([])
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
					

					return (
						<li key={w.word}>
							<h1>{w.word}</h1>
							<h5> {w.phonetic} </h5>
							<p> {w.meanings[0].definitions[0].definition}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Input;
