import { useEffect, useState, Fragment } from "react";
import CharactersList from "./CharactersList"

const RenderList = () => {
  const initialState = { isLoading: true, error: null, data: null}
  const [state, setState] = useState(initialState)

  useEffect(()=>{
    setState(initialState)
    fetch("https://breakingbadapi.com/api/characters")
    .then((data)=> data.json())
    .then((characters)=> {
      setState({ isLoading: false, error: null, data: characters })
    })
    .catch((error)=> {
      setState({ isLoading: false, error: null, data: null })
    })
  }, [])
  return (
    <Fragment>
      {state.isLoading && <h2>Is loading...</h2>}
      {state.error && <h2>{state.error}</h2>}
      {state.data && <CharactersList data={state.data} />}
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