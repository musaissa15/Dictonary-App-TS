import React,{useState} from 'react';
import './App.css';
import Input from './Input';

function App() {
  const [word, setWord] = useState<string>('')
  return (
		<div className="App">
			<h1> Dictionary</h1>
			<Input word={word} setWord={setWord} />
		</div>
	);
}
//!!https://api.dictionaryapi.dev/api/v2/entries/en/<word>
export default App;
