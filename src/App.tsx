import React,{useState} from 'react';
import './App.css';
import Input from './Input';

function App() {
  const [searchWord, setSearchWord] = useState<string>('')
  return (
		<div className="App" >
			
			<Input searchWord={searchWord} setSearchWord={setSearchWord} />
			
		</div>
	);
}

export default App;
