import React, {useEffect, useState} from "react";
import {getWordData} from "./API";
import ReactAudioPlayer from "react-audio-player";

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
	const [wordInfo, setWordInfo] = useState<Dictionary>([]);
	const handleSubmit = (event: any): void => {
		event.preventDefault();
	};

	const handleChange = (event: any): void => {
		props.setSearchWord(event.target.value);
	};

	const asyncData = async () => {
		try {
			const dataFromApi = await getWordData(props.searchWord);

			setWordInfo(dataFromApi);
		} catch (error: any) {
			console.log(error);
		}
	};
	useEffect(() => {
		asyncData();
	}, [props.searchWord]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					onChange={handleChange}
					value={props.searchWord}
				/>
				<button type='submit'> Search</button>
			</form>
			<ul>
				{wordInfo.map(w => {
					return (
						<li>
							<h1>{w.word}</h1>
							<h5>{w.meanings[0].partOfSpeech} </h5>
							<h5> {w.phonetic} </h5>
							<p> {w.meanings[0].definitions[0].definition}</p>
							{w.meanings[0].definitions[0].example ? (
								<p>
									Example:
									{w.meanings[0].definitions[0].example}
								</p>
							) : null}

							<h3>{w.meanings[0].synonyms.join(" ")}</h3>
							<a href={w.license?.url}>{w.license?.name}</a>
							{w.phonetics.map(phonetic => (
								<div>
									{phonetic.sourceUrl ? (
										<a href={phonetic.sourceUrl}>
											<p>More...</p>
										</a>
									) : null}

									{phonetic.audio ? (
										<ReactAudioPlayer
											src={phonetic.audio}
											controls
										/>
									) : null}
								</div>
							))}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Input;
