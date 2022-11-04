const Sound = ({ sound, text, onClick }) => {
	return (
		<>
			<button 
				onClick={() => onClick(sound)}
				className='flex justify-center align-middle text-2xl min-w-full min-h-full border-4 border-pink-200 hover:border-pink-500 rounded-xl bg-gray-100 sm:max-md:last:col-span-2 p-6 py-20 md:py-18 drop-shadow-lg' 
				style={{ 
					backgroundImage: `url('${sound.cover}')`,
					backgroundPosition: 'top',
					backgroundRepeat:'no-repeat',
					backgroundSize:'cover',
					color: 'white'
				}}
			>
				<span className="relative">
					<span className="block absolute -inset-1 -skew-y-3 bg-pink-500 drop-shadow-md hover:drop-shadow-xl" aria-hidden="true">{text}</span>
					<span>{text}</span>
				</span>
			</button>
		</>
	);
};

export default Sound;