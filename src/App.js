import './App.css';
import Banner from './Components/Banner'
import Details from './Components/Details'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {MovieIdProvider} from './MovieContext'

function App() {
  return (
    <MovieIdProvider>
        <Router>
        <Switch>
          <Route path="/movie">
                  <Details />
            </Route>
            <Route exact path="/">
                  <Banner />
            </Route>
          </Switch>
        </Router>
    </MovieIdProvider>
      
  );
}

export default App;
