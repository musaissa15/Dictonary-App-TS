import React,{useState} from 'react';
import './App.css';
import Input from './Input';

function App() {
  const [searchWord, setSearchWord] = useState<string>('')
  return (
		<div className="App">
			<h1> Dictionary</h1>
			<Input searchWord={searchWord} setSearchWord={setSearchWord} />
		</div>
	);
}

export default App;
