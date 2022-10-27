const Sound = ({ sound, text, onClick }) => {
	return (
		<button onClick={() => onClick(sound.sfx)} className='button'>
			{text}
		</button>
	);
};

export default Sound;