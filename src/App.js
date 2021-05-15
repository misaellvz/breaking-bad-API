import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact  path="/">
            <Home/>
          </Route>
          <Route exact  path="/character">
            <Character/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
