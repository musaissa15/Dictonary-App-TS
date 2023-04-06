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
			<div className="pt-2 relative mx-auto text-gray-600">
				<input
					type='text'
					onChange ={handleChange}
						value={searchWord}
						placeholder="Search"
					 className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none object-center 
    "
				/>
					<button type='submit' className="absolute right-0 top-0 mt-5 mr-4"> <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xmlSpace="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg></button>
					</div>
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
											className=" items-center"
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
