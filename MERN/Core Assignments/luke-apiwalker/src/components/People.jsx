import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const People =(props) =>{
    const {category, id} = props;
    const[error, setError] = useState(false);
    const [person,setPerson] = useState=({
        name:"",
        height:"",
        mass: "",
        hairColor:"",
        skinColor: ""
    })

    useEffect(()=>{
        axios.get('https://swapi.dev/${category}/${id})')
        .then(response=>{
            const{ name, height, mass, hairColor, skinColor} = response.data;
            setPerson(response.data);
        })
        .catch(err=>setError(true));
    },  [id]);

    return(
        <div>

        </div>
    )
}