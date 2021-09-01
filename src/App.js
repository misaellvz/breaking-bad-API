import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RenderList from "./components/RenderList";
import RenderSingleCharacter from "./components/RenderSingleCharacter";

function App() {
  return (
    <BrowserRouter basename="/breaking-bad-API">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact  path="/">
            <Home/>
          </Route>
          <Route exact  path="/characters">
            <RenderList/>
          </Route>
          <Route exact  path="/characters/:id">
            <RenderSingleCharacter/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
