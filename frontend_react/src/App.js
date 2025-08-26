import React from 'react';

import { About, Header, Footer, Skills, Testimonial, Work } from './container';
import { Navbar, SocialMedia } from './components';
import './App.scss';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			{/* <Testimonial /> */}
			<Footer />
		</div>
	);
}

export default App;
