import axios from 'axios';
import React, { useState } from 'react';

const Pokemon = () => {

    const [poke, setPoke] = useState([])


    const getPokemon = ()=> {
           console.log("Pokemon")
           axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
          
            console.log(response);
            setPoke({
                pokemon:response.results
            })
            
})
          
       };
       

       
    return(
       
        
        <div>
            <button onClick={getPokemon}>Fetch</button>
                <h2>{poke.pokemon ? poke.pokemon.map((item,index) =>{
                    return(<div key={index}>{item.name}</div>)
                }):null}</h2>
        
        </div>
     );
}

export default Pokemon;