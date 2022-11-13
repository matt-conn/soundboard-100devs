const Sound = ({ sound, text, onClick }) => {
	return (
		<>
			<button 
				onClick={() => onClick(sound)}
				className='sound-btn flex justify-center text-sm sm:text-lg md:text-xl lg:text-2xl min-w-full min-h-full border-4 border-pink-200 hover:border-pink-500 rounded-xl bg-gray-100  drop-shadow-lg' 
				style={{ 
					backgroundImage: `url('${sound.cover}')`,
					backgroundPosition: 'top',
					backgroundRepeat:'no-repeat',
					backgroundSize:'cover',
					color: 'white'
				}}
			>
				<span className="sound-label relative text-center">
					<span className="block absolute -inset-1 -skew-y-3 bg-pink-500 border-2 border-pink-300 drop-shadow-xl" aria-hidden="true">{text}</span>
					<span>{text}</span>
				</span>
			</button>
		</>
	);
};

// p-6 py-20 md:py-18
// sm:max-md:last:col-span-2

export default Sound;