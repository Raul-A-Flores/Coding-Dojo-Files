import axios from 'axios';
import React, { useState } from 'react';

const Pokemon = () => {

    const [poke, setPoke] = useState([])


    const getPokemon = ()=> {
           console.log("Pokemon")
           axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
           .then(response=>{
          
            console.log(response);
            setPoke(response.data.results);
            
            })
            .catch((err)=>{
                console.log(err);
            })
};
          

       
    return(
       
        
        <div>
            <button onClick={getPokemon}>Fetch</button>
            <h1>Name of all Pokemon: </h1>
                {
                    poke.map((pokemon,index)=>{
                        return(
                            <div key={ index }>
                            
                            <h2>{pokemon.name}</h2>
                            </div>
                        )
                    })
                }
        </div>
     );
}

export default Pokemon;