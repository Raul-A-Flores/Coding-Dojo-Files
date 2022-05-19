import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';



// need to share state outside and share states 
function App() {
  return (
    <div className="App">
      <Tabs tabItems={["Tab1", "Tab2", "Tab3", "Tabs4"]}/>
    </div>
  );
}

export default App;
