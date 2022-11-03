import Sound from './Sound';

const Sounds = ({ sounds, onClick }) => {
	return (
        <div className="grid justify-items-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {sounds.map((sound) => (
                <Sound key={sound.id} sound={sound} text={sound.text} onClick={onClick} />
            ))}
        </div>
    )
};

export default Sounds;