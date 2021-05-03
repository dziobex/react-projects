import './App.css';
import Search from './components/Search';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/:id" component={RecipeDetails} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
