import React from 'react';

export interface Cast {
    id: number;
    name: string;
    image: string;
}

interface CharacterDetailsProps {
    character: Cast;
}

const CharacterCard: React.FC<CharacterDetailsProps> = ({ character }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={character.image} className="img-fluid rounded-start" alt={character.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex align-items-stretch" style={{minHeight: '100%'}}>
                        <div className="row">
                            <h5 className="card-title">{character.name}</h5>
                            <div className="card-text">
                                <p>Location: Earth Dimension C-137</p>
                                <p>Status: Alive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
