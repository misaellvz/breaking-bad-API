import { Link } from "react-router-dom";
import "../styles/StylesComponents/SingleCharacter.css";

const SingleCharacterView = ({data}) => {
  return (
    <div className="detail-container">
      <div className="single-charactersCard">
        {data.map((characterDetail) => {
            let nextCharacterId = characterDetail.char_id + 1;
            let previousCharacterId = characterDetail.char_id - 1;
            if (nextCharacterId === 58) {
              nextCharacterId = 112;
            }
            if (nextCharacterId === 117){
              nextCharacterId = 1;
            }
            if (previousCharacterId === 0) {
              previousCharacterId = 116;
            }
            if (previousCharacterId === 111) {
              previousCharacterId = 57;
            }
            return (
            <div className="single-character-card" key={characterDetail.char_id}>
              <h2>{characterDetail.name}</h2>
              <img  className="single-character-card-img" src={characterDetail.img} alt="CharacterImage"/>
              <div className="single-character-card-description-text">
                <p><strong>Nickname:</strong> {characterDetail.nickname} </p>
                <p><strong>Birthday:</strong> {characterDetail.birthday} </p>
                <p><strong>Occupation:</strong> {characterDetail.occupation.map(occ => occ).join(", ")} </p>
                <p><strong>Appearance:</strong> {characterDetail.appearance.map(appear => appear).join(", ")} </p>
                <p><strong>Status:</strong> {characterDetail.status} </p>
                <p><strong>Portrayed:</strong> {characterDetail.portrayed}</p>
              </div>
              <div className="buttons">
              <Link to={`${previousCharacterId}`}>
                <button >Previous</button>
              </Link>
              <Link to={`${nextCharacterId}`}>
                <button>Next</button>
              </Link>
              </div>
            </div>
          )})}
      </div>
    </div>
  );
};

export default SingleCharacterView;