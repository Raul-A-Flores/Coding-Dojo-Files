import { BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import Content from './components/Content';
import Home from './components/Home';
import Strings from './components/Strings';
import Numbers from './components/Number';
import './App.css';
import Backgrounds from './components/Backgrounds';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Link to ="/contents">Contents</Link>
      |
      <Link to ="/">Home</Link>
        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/contents">
            <Content/>
          </Route>
          <Route exact path="/:string">
            <Strings/>
          </Route>
          <Route exact path="/:number">
            <Numbers/>
          </Route>
          <Route exact path="/:string/:color/:color2">
            <Backgrounds/>
          </Route>
          
        </Switch>
    </BrowserRouter>
     
     
    </div>
  );
}

export default App;
