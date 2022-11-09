import { useState } from 'react';
import planeSfx from './sounds/small-plane.mp3'
import Sounds from './components/Sounds'
import './App.css';

function App() {
	// const [isPlaying, setIsPlaying] = useState(false);

	const [sounds] = useState([
		{
			id: 1,
			text: 'Intro',
			sfx: new Audio(planeSfx),
			isPlaying: false,
			cover: 'images/default-cover.png',
		},
		{
			id: 2,
			text: 'We go get2',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
			cover: 'images/default-cover.png',
		},
		{
			id: 3,
			text: 'We go get3',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
			cover: 'images/default-cover.png',
		},
		{
			id: 4,
			text: 'We go get4',
			sfx: new Audio(planeSfx),
			isPlaying: false,
			cover: 'images/default-cover.png',
		},
		{
			id: 5,
			text: 'We go gettttt5',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
			cover: 'images/default-cover.png',
		},
		{
			id: 6,
			text: 'We go get6',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
			cover: 'images/default-cover.png',
		},
		{
			id: 7,
			text: 'We go get7',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
			cover: 'images/default-cover.png',
		},
		{
			id: 8,
			text: 'We go get8',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
			cover: 'images/default-cover.png',
		},
		{
			id: 9,
			text: 'We go get9',
			sfx: './sounds/small-plan.mp3',
			isPlaying: false,
			cover: 'images/default-cover.png',
		}
	])

	const toggleSound = (sound) => {
		if (!sound.isPlaying) {
			sound.sfx.currentTime = 0
			sound.sfx.play();
		} else {
			sound.sfx.pause();
		}

		sound.isPlaying = !sound.isPlaying;
	}

	return (
		<div className='app-container flex flex-col'>
			<header className='mx-auto'>
				<h1 className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-mono font-bold'>100Devs Soundboard</h1>
			</header>

			<main>
				<Sounds 
					sounds={sounds}
					onClick={toggleSound}
				/>
			</main>

			<footer className='flex flex-col'>
				<span className="text-center">
					<span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    					<span className="relative text-white">More About 100Devs</span>
  					</span>
				</span>
				
				<ul className='mt-8 mb-5 flex justify-center'>
					<li className='ml-2 mr-2'><a href="https://www.youtube.com/channel/UCGiRSHBdWuCgjgmPPz_13xw"><i className="fa-brands fa-youtube"></i></a></li>
					<li className='ml-2 mr-2'><a href="https://www.twitch.tv/learnwithleon"><i className="fa-brands fa-twitch"></i></a></li>
					<li className='ml-2 mr-2'><a href="https://twitter.com/leonnoel"><i className="fa-solid fa-link"></i></a></li>
					<li className='ml-2 mr-2'><a href="https://discord.com/invite/zNxhjnmDPy"><i className="fa-brands fa-discord"></i></a></li>
					<li className='ml-2 mr-2'><a href="https://www.youtube.com/channel/UCGiRSHBdWuCgjgmPPz_13xw"><i className="fa-brands fa-github"></i></a></li>
				</ul>
			</footer>
		</div>
	);
}

export default App;
