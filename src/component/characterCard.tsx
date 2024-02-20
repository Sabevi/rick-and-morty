import React from 'react';
import {CharacterModel} from "../model/CharacterModel.ts";



interface CharacterDetailsProps {
    character: CharacterModel;
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
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
            </div>
        </div>
    );
};

export default CharacterCard;
