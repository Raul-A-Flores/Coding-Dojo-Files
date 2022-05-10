
import React, { useState, useEffect } from 'react';

const Pokemon = () => {

    const [poke, setPoke] = useState([])


    const getPokemon = ()=> {
           console.log("Pokemon")
           fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
           .then(response =>{
               return response.json()
           })
           .then(response=>{
               setPoke({
               pokemon: response.results
            })

           })
       };
       

       
    return(
       
        
        <div>
            <button onClick={getPokemon}>Fetch</button>
            <ul>
                {poke.pokemon ? poke.pokemon.map((item,index) =>{
                    return(<div key={index}>{item.name}</div>)
                }):null}
            </ul>

        </div>
     );
}

export default Pokemon;