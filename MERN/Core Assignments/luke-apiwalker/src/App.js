
import './App.css';
import {BrowserRouter,
Link, Route, Switch} from 'react-router-dom';
import Search from './components/Search';
import { useState } from 'react';

function App() {

  const [search, setSearch]= useState({
    category:"people", 
    id: ""
  })

  const changeHandler = (e) =>{
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(search)

  }


  return (
    <div className="App">
    
    <BrowserRouter>
      <Link to ="/people">people</Link>
      <Switch>
        <Route path="/">
          <Search search={search} changeHandler={changeHandler} submitHandler={submitHandler}/>
        </Route>
      </Switch>

    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
