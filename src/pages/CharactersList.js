import { Link } from "react-router-dom";

const CharactersList = ({data}) => {
  return (
      <ul className="charactersCard">
      {data.map((character) => {
          return (
          <li className="character-card" key={character.char_id}>
            <h1>{character.name}</h1>
            <img src={character.img} alt="CharacterImage"/>
            <Link to={`characters/${character.char_id}`} className="character-card-button">
              <h2>{character.nickname}</h2>
            </Link>
          </li>
        )})}
      </ul>
  );
}

export default CharactersList;