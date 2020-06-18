import React from 'react';
import {Main} from './Main.js';
import {MenuBar} from './components/MenuBar.js';
import {Footer} from './Footer.js';

function App() {
	return (
		<div className="App">
			<MenuBar/>
			<Main/>
			<Footer/>
		</div>
	);
}

export default App;
