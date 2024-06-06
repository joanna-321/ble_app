import React from 'react';
import Button from './components/button/button';
// import Button from "..\src\components\button\button";

function App() {
	return (
		<div className="App container mx-auto">
			<h1 className="text-5xl">BUTTON</h1>
			<div className="py-10">
				<Button onClick={() => alert('button clicked')} text="OK" />
			</div>
		</div>
	);
}

export default App;