import { useEffect, useState, Fragment } from "react";
import CharactersList from "./CharactersList"

const RenderList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true)
    setError(null)
    fetch("https://breakingbadapi.com/api/characters")
    .then((data)=> data.json())
    .then((characters)=> {
      setLoading(false)
      setData(characters)
    })
    .catch((error)=> {
      setLoading(false)
      setError(error)
    })
  }, [])
  return (
    <Fragment>
      {isLoading && <h2>Is loading...</h2>}
      {error && <h2>{error}</h2>}
      {data && <CharactersList data={data} />}
    </Fragment>
    );
}

export default RenderList;

// const singleCaracter = characterList[0];
// <div className="character-card">
// <h1>BREAKING BAD</h1>
// <h2>Name: {singleCaracter.name} </h2>
// <img src={singleCaracter.img} alt="CharacterImage"/>
// <p>Nickname: {singleCaracter.nickname} </p>
// <p>Birthday: {singleCaracter.birthday} </p>
// <p>Occupation: {singleCaracter.occupation.map(occ => occ).join(", ")} </p>
// <p>Appearance: {singleCaracter.appearance.map(appear => appear).join(", ")} </p>
// <p>Status: {singleCaracter.status} </p>
// <p>Portrayed: {singleCaracter.portrayed}</p>
// </div>);