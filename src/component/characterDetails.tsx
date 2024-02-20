import React from 'react';

interface Character {
    name: string;
    image: string;
}

interface CharacterDetailsProps {
    character: Character;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={character.image} className="card-img-top" alt={character.name} />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                {/* You can add more details here if needed */}
            </div>
        </div>
    );
};

export default CharacterDetails;
