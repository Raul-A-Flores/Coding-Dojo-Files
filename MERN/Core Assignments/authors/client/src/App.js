
import './App.css';
import Author from './components/Author'
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import AddAuthor from './components/AddAuthor'
import EditAuthor from "./components/EditAuthor"



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
      <Link to ='/'>Home </Link>
      |
      <Link to ='/new'>Add an Author</Link>
        <Switch>
          <Route exact path='/'>
            <Author/>
          </Route>
          <Route exact path='/new'>
            <AddAuthor/>
          </Route>
          <Route exact path='/edit/:_id'>
            <EditAuthor/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
