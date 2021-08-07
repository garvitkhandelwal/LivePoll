import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import store from './redux/store'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route exact path="/home">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;