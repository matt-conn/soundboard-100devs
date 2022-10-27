const Sound = ({ text, onClick }) => {
	return (
		<button onClick={onClick} className='button'>
			{text}
		</button>
	);
};

export default Sound;