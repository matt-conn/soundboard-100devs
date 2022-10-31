const Sound = ({ sound, text, onClick }) => {
	return (
		<div>
			<button 
				onClick={() => onClick(sound)}
				className='button bg-violet-500 hover:bg-violet-600'
				style={{ 
					backgroundImage: `url('${sound.cover}')`,
					backgroundPosition: 'center',
					backgroundRepeat:'no-repeat',
					backgroundSize:'cover',
					color: 'white'
				}}
			>
			</button>

			<p className='subtitle'>{text}</p>
		</div>
	);
};

export default Sound;


// background: url('./images/default-cover.png');
// background-position: center;
// background-size: cover;
// background-repeat: no-repeat;