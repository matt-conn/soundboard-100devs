import Sound from './Sound';

const Sounds = ({ sounds, onClick }) => {
	return (
        <div className="grid-container gap-4 grid justify-items-center">
            {sounds.map((sound) => (
                <Sound key={sound.id} sound={sound} text={sound.text} onClick={onClick} />
            ))}
        </div>
    )
};

// grid-cols-2 gap-4 md:grid-cols-3

export default Sounds;