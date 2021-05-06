import './App.css';
import Home from './Component/Home.js/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetails from './Component/TeamDetails/TeamDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route  path="/team/:id">
                <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
