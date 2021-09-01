import { useEffect, useState, Fragment } from "react";
import CharactersList from "../pages/CharactersList"

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
