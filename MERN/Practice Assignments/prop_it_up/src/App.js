import PersonaCard from './components/PersonaCard';

import './App.css';

function App() {
  return (
  <div className='App'>
    
    <div>
      <PersonaCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/><hr/>
      <PersonaCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/><hr/>
      <PersonaCard firstName={"Millard"} lastName={"Filmore"} age={50} hairColor={"Brown"}/><hr/>
      <PersonaCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/><hr/>
      
    </div>
    

    
  </div>
  
  );
}


export default App;


