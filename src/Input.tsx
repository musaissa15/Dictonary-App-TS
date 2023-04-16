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
const Input = ({searchWord, setSearchWord}: Props) => {
	const [wordInfo, setWordInfo] = useState<Dictionary>([]);
	const handleSubmit = (event: any): void => {
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
				<div className='flex justify-start border-b-4 title'>
					<h1 className=' inline-block md:inline text-4xl '>
						{" "}
						Dictionary
					</h1>
				</div>
				<div className=' mx-auto text-pink-600 form'>
					<input
						type='text'
						onChange={handleChange}
						value={searchWord}
						placeholder='Enter a Word'
						className='border-2 border-red-400 rounded-lg input'
					/>
					<button
						type='submit'
						className='button rounded-lg border-2 border-red-200'>
						Search
					</button>
				</div>
			</form>
			<br />
			<br />
			<br />
			<ul>
				{wordInfo.map(w => {
					return (
						<li>
							<div className='word-container'>
								<div className='border-b-4'>
									<div className='flex justify-left '>
										<h1 className='text-4xl font-bold'>
											{w.word.charAt(0).toUpperCase() +
												w.word.slice(1)}
										</h1>
										<h5 className='mt-2 ml-1'>
											{w.meanings[0].partOfSpeech
												.charAt(0)
												.toUpperCase() +
												w.meanings[0].partOfSpeech.slice(
													1
												)}{" "}
										</h5>
									</div>
									<h5 className='font-bold'>
										{" "}
										{w.phonetic}{" "}
									</h5>
									{w.meanings[0].synonyms.length === 1 ? (
										<h3>
											Synonym:{" "}
											{w.meanings[0].synonyms.join(" ")}
										</h3>
									) : w.meanings[0].synonyms.length > 1 ? (
										<h3>
											Synonyms:
											{w.meanings[0].synonyms.join(", ")}
										</h3>
									) : w.meanings[0].synonyms.length ===
									  0 ? null : null}
								</div>
								<p>
									{" "}
									{w.meanings[0].definitions[0].definition}
								</p>
								{w.meanings[0].definitions[0].example ? (
									<p>
										Example:
										{w.meanings[0].definitions[0].example}
									</p>
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
												className='flex audio-player'
											/>
										) : null}
									</div>
								))}
								{w.license ? (
									<a href={w.license?.url}>
										{w.license?.name}
									</a>
								) : null}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Input;
