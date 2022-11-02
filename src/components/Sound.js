const Sound = ({ sound, text, onClick }) => {
	return (
		<>
			<button 
				onClick={() => onClick(sound)}
				className='flex justify-center text-4xl border-2 border-gray-300 rounded-xl py-10 px-6 bg-gray-100 hover:border-gray-800 sm:max-md:last:col-span-2' 
				style={{ 
					backgroundImage: `url('${sound.cover}')`,
					backgroundPosition: 'center',
					backgroundRepeat:'no-repeat',
					backgroundSize:'cover',
					color: 'white'
				}}
			>
				{text}
			</button>
			
			{/* <p className='subtitle'>{text}</p> */}
		</>
	);
};

export default Sound;


// background: url('./images/default-cover.png');
// background-position: center;
// background-size: cover;
// background-repeat: no-repeat;