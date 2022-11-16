import { useState } from 'react';
import boatsAndLogs from './sounds/boats-and-logs.mp3';
import firstTry from './sounds/first-try.mp3';
import hypeLeon from './sounds/hype-leon.mp3';
import introMusic from './sounds/intro.mp3';
import justDoIt from './sounds/just-do-it.mp3';
import pepTalkLeon from './sounds/leon-pep-talk.mp3';
import weGoGet from './sounds/we-go-get.mp3';
import tenSecWarning from './sounds/ten-second-warning.mp3';
import why100Devs from './sounds/why.mp3';
import Sounds from './components/Sounds';
import './App.css';

function App() {
	const [sounds] = useState([
		{
			id: 1,
			text: 'Intro',
			sfx: new Audio(introMusic),
			isPlaying: false,
			cover: 'images/intro.png',
		},
		{
			id: 2,
			text: 'Hype Leon',
			sfx: new Audio(hypeLeon),
			isPlaying: false,
			cover: 'images/hype-leon.png',
		},
		{
			id: 3,
			text: 'We Go Get',
			sfx: new Audio(weGoGet),
			isPlaying: false,
			cover: 'images/we-go-get.png',
		},
		{
			id: 4,
			text: 'First Try',
			sfx: new Audio(firstTry),
			isPlaying: false,
			cover: 'images/first-try.png',
		},
		{
			id: 5,
			text: 'Why 100Devs?',
			sfx: new Audio(why100Devs),
			isPlaying: false,
			cover: 'images/bob.png',
		},
		{
			id: 6,
			text: ':10 Warning',
			sfx: new Audio(tenSecWarning),
			isPlaying: false,
			cover: 'images/ten-second-warning.png',
		},
		{
			id: 7,
			text: 'Boats & Logs',
			sfx: new Audio(boatsAndLogs),
			isPlaying: false,
			cover: 'images/boats-and-logs.png',
		},
		{
			id: 8,
			text: 'Pep Talk Leon',
			sfx: new Audio(pepTalkLeon),
			isPlaying: false,
			cover: 'images/conference-room.png',
		},
		{
			id: 9,
			text: 'Just Do It',
			sfx: new Audio(justDoIt),
			isPlaying: false,
			cover: 'images/just-do-it.png',
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
		<div className='app-container flex flex-col justify-between'>
			<header className='mx-auto'>
				<h1 className='text-xl sm:text-3xl md:text-5xl lg:text-6xl font-mono font-bold'>100Devs Soundboard</h1>
			</header>

			<main>
				<Sounds 
					sounds={sounds}
					onClick={toggleSound}
				/>
			</main>

			<footer className='flex flex-col mt-8'>
				<span className="text-center">
					<span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    					<span className="relative text-sm sm:text-lg md:text-lg lg:text-xl font-mono font-bold">More About 100Devs</span>
  					</span>
				</span>
				
				<ul className='mt-4 mb-5 flex justify-center'>
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
