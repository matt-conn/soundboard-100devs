import { useState } from 'react';
import planeSfx from './sounds/small-plane.mp3'
import Sounds from './components/Sounds'
import './App.css';

function App() {
	// const [isPlaying, setIsPlaying] = useState(false);

	const [sounds] = useState([
		{
			id: 1,
			text: 'We go get1',
			sfx: new Audio(planeSfx),
			isPlaying: false,
			cover: 'images/default-cover.png',
		},
		{
			id: 2,
			text: 'We go get2',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
		},
		{
			id: 3,
			text: 'We go get3',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
		},
		{
			id: 4,
			text: 'We go get4',
			sfx: new Audio(planeSfx),
			isPlaying: false,
		},
		{
			id: 5,
			text: 'We go get5',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
		},
		{
			id: 6,
			text: 'We go get6',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
		},
		{
			id: 7,
			text: 'We go get7',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
		},
		{
			id: 8,
			text: 'We go get8',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
		},
		{
			id: 9,
			text: 'We go get9',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
		}
	])

	const toggleSound = (sound) => {
		if (!sound.isPlaying) {
			sound.sfx.play();
		} else {
			sound.sfx.pause();
		}

		sound.isPlaying = !sound.isPlaying;
	}

	return (
		<div className='container flex flex-col'>
			<header className='mx-auto'>
				<h1 className='text-3xl font-bold'>100Devs Soundboard</h1>
			</header>

			<main>
				<Sounds 
					sounds={sounds}
					onClick={toggleSound}
				/>
			</main>
		</div>
	);
}

export default App;
