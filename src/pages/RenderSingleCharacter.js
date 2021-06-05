import { useParams } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import SingleCharacter from "./SingleCharacter";

const RenderSingleCharacter = () => {
  const { id } = useParams();
  const initialState = { isLoading: true, error: null, data: null, id: id}
  const [state, setState] = useState(initialState);

  useEffect(()=>{
    setState(initialState)
    fetch(`https://breakingbadapi.com/api/characters/${id}`)
    .then((data)=> data.json())
    .then((characters)=> {
      setState({ isLoading: false, error: null, data: characters, id: id})
    })
    .catch((error)=> {
      setState({ isLoading: false, error: error, data: null, id: id})
    })
  }, [id])
  return (
    <Fragment>
      {state.isLoading && <h2 className="Loading">Is loading...</h2>}
      {state.error && <h2>{state.error}</h2>}
      {state.data && <SingleCharacter data={state.data} />}
    </Fragment>
    );
};

export default RenderSingleCharacter;