import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import EditProduct from './components/EditProduct';
import OneProduct from './components/OneProduct';
import Main from './views/Main';


    
function App() {
  return (
    <BrowserRouter>
      
      <Switch>
      <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/Products/:id">
          <OneProduct/>
        </Route>
        <Route exact path="/edit/:id">
          <EditProduct/>
        </Route>
      </Switch>

    </BrowserRouter>
    

  )
}
    
export default App;