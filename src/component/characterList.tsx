import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries/queries';

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default CharacterList;
