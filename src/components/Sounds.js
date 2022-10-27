import Sound from './Sound';

const Sounds = ({ sounds, onClick }) => {
	return (
        <div className="board">
            {sounds.map((sound) => (
                <Sound key={sound.id} text={sound.text} onClick={onClick} />
            ))}
        </div>
    )
};

export default Sounds;
