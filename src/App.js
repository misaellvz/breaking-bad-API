import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Character from "./pages/useState";
import RenderList from "./pages/RenderList";
import Grid from "./pages/Grid";
import SingleCharacter from "./pages/SingleCharacter";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact  path="/">
            <Home/>
          </Route>
          <Route exact  path="/characters">
            <RenderList/>
          </Route>
          <Route exact  path="/character">
            <SingleCharacter/>
          </Route>
          <Route exact  path="/grid">
            <Grid/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
