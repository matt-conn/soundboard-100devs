const Sound = ({ sound, text, onClick }) => {
	return (
		<button 
			onClick={() => onClick(sound)}
			className='button'
			style={{ 
				backgroundImage: `url(/default-cover.png)`,
				backgroundPosition: 'center',
				backgroundRepeat:'no-repeat',
				backgroundSize:'contain',
				color: 'white'
			}}
		>
			{text}
		</button>
	);
};

export default Sound;


// background: url('./images/default-cover.png');
// background-position: center;
// background-size: cover;
// background-repeat: no-repeat;