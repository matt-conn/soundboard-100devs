import Sound from './Sound';

const Sounds = ({ sounds }) => {
	return (
        <div className="board">
            {sounds.map((sound) => (
                <Sound task={sound.text} />
            ))}
        </div>
    )
};

export default Sounds;
