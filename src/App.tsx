import React,{useState} from 'react';
import './App.css';
import Input from './Input';

function App() {
  const [searchWord, setSearchWord] = useState<string>('')
  return (
		<div className="App" >
			<h1 className="text-3xl font-bold underline test"> Dictionary</h1>
			<Input searchWord={searchWord} setSearchWord={setSearchWord} />
		</div>
	);
}

export default App;
