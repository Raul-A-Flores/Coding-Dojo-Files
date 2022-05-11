import React, {useState} from 'react';

import './App.css';




function App() {
  const[newColor, setNewColor] = useState("");
  const[boxes, setBoxes] = useState([]);

  function newBox(event) {
    event.preventDefault()
    setBoxes([...boxes,newColor])

  }
  return (
    <div className="App">
      <form onSubmit={(event) => newBox(event)}>
        <label>Color</label>
        <input onChange ={(event) => {
          setNewColor(event.target.value);
          }}type="text" />
        <button>Add</button>

      </form>
      <div style={{ display: "flex"}}>

        {boxes.map((color,i)=>{
          return(
          <div key={i}
          style={{
            backgroundColor: color,
            width: 200, 
            height:200,
            marginRight: 10,

          }}
          ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
