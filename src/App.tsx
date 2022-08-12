import { useState } from 'react';
import './App.css';
import { Books } from './components/Books';
import { Employees } from './components/Employees';

function App() {
	return (
		<div className="App">
			<h1>TypeScript Examples</h1>
			<Books/>
			<Employees/>
		</div>
	);
}

export default App;
