import './App.css';
import Banner from './Components/Banner'
import Details from './Components/Details'
import Error from './Components/Error'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {MovieIdProvider} from './MovieContext'
import { useMovieId } from './MovieContext'

function App() {


  return (
    <MovieIdProvider>
        <Router>
        <Switch>
          <Route path="/movie">
                  <Details />
            </Route>
            <Route path="/error">
                  <Error />
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
