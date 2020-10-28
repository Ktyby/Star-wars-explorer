import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main';

const App = () => (
	<BrowserRouter>
		<Header />
		<Main />
	</BrowserRouter>
);

export default App;
