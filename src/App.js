import { useState } from 'react';
import planeSfx from './sounds/small-plane.mp3'
import Sounds from './components/Sounds'
import './App.css';

function App() {
	const [isPlaying, setIsPlaying] = useState(false);

	const [sounds] = useState([
		{
			id: 1,
			text: 'We go get1',
			sfx: new Audio(planeSfx),
		},
		{
			id: 2,
			text: 'We go get2',
			sfx: './sounds/small-plan.mp3',
		},
		{
			id: 3,
			text: 'We go get3',
			sfx: './sounds/small-plan.mp3',
		},
		{
			id: 4,
			text: 'We go get4',
			sfx: './sounds/small-plan.mp3',
		},
		{
			id: 5,
			text: 'We go get5',
			sfx: './sounds/small-plan.mp3',
		},
		{
			id: 6,
			text: 'We go get6',
			sfx: './sounds/small-plan.mp3',
		},
		{
			id: 7,
			text: 'We go get7',
			sfx: './sounds/small-plan.mp3',
		},
		{
			id: 8,
			text: 'We go get8',
			sfx: './sounds/small-plan.mp3',
		},
		{
			id: 9,
			text: 'We go get9',
			sfx: './sounds/small-plan.mp3',
		}
	])

	const playSound = (sfx) => {
		if (!isPlaying) {
			sfx.play();
		} else {
			sfx.pause();
		}

		setIsPlaying(!isPlaying)
	}

	return (
		<div className='container'>
			<header className='App-header'>
				<h1>100Devs Soundboard</h1>
			</header>

			<main>
				<Sounds 
					sounds={sounds}
					onClick={playSound}
				/>
			</main>
		</div>
	);
}

export default App;
