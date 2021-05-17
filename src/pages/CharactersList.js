

const CharactersList = ({data}) => {

  return (
      <ul className="charactersCard">
      {data.map((character) => {
          return (
          <li className="character-card" key={character.char_id}>
            <h1>{character.name}</h1>
            <h2>{character.nickname}</h2>
          </li>
        )})}
      </ul>
  );
}

export default CharactersList;