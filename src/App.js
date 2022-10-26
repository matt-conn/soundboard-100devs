import { useState } from 'react';
import Sounds from './components/Sounds'
import './App.css';

function App() {
	const [sounds] = useState([
		{
			id: 1,
			text: 'We go get1'
		},
		{
			id: 2,
			text: 'We go get2'
		},
		{
			id: 3,
			text: 'We go get3'
		},
		{
			id: 4,
			text: 'We go get4'
		},
		{
			id: 5,
			text: 'We go get5'
		},
		{
			id: 6,
			text: 'We go get6'
		},
		{
			id: 7,
			text: 'We go get7'
		},
		{
			id: 8,
			text: 'We go get8'
		},
		{
			id: 9,
			text: 'We go get9'
		}
	])


	return (
		<div className='container'>
			<header className='App-header'>
				<h1>100Devs Soundboard</h1>
			</header>

			<main>
				<Sounds 
					sounds={sounds}
				/>
			</main>
		</div>
	);
}

export default App;
