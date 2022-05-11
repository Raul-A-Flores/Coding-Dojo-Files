import React from "react";
import { useParams } from "react-router-dom";

const Backgrounds = (props)=>{
    const { color, color2, string} = useParams();

    return(
        <div style={{backgroundColor: color, color: color2 }}>
            <h2>{string}</h2>
    
        </div>
        
    )
}

export default Backgrounds;