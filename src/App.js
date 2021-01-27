import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./pages/Home"
import Plant from "./pages/Plant"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTint, faSun, faUtensils, faSeedling } from '@fortawesome/free-solid-svg-icons'

library.add(faTint, faSun, faUtensils, faSeedling);

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/plant/:plant" component={Plant} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
