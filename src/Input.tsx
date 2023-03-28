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
const Input=({searchWord, setSearchWord}: Props) => {
	const [wordInfo, setWordInfo] = useState<Dictionary>([]);
	const handleSubmit = (event:  any): void => {
		event.preventDefault();
	};

	const handleChange = (event: any): void => {
		setSearchWord(event.target.value);
	};

	const asyncData = async () => {
		try {
			const dataFromApi = await getWordData(searchWord);

			setWordInfo(dataFromApi);
		} catch (error: any) {
			console.log(error);
		}
	};
	useEffect(() => {
		asyncData();
	}, [searchWord]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					onChange ={handleChange}
					value={searchWord}
				/>
				<button type='submit'> Search</button>
			</form>
			<ul >
				{wordInfo.map(w => {
					return (
						<li >
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
							{w.meanings[0].synonyms.length === 1 ? (
								<h3>
									Synonym: {w.meanings[0].synonyms.join(" ")}
								</h3>
							) : w.meanings[0].synonyms.length > 1 ? (
								<h3>
									Synonyms: {w.meanings[0].synonyms.join(", ")}
								</h3>
							) : w.meanings[0].synonyms.length === 0 ? (
								null
							) : null}

							{w.license ? (
								<a href={w.license?.url}>{w.license?.name}</a>
							) : null}

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
