import React from "react";
import { useParams } from "react-router-dom";


const Numbers = (props) =>{
    const {number} = useParams();


    return(
        <h2>{number}</h2>
    )


}

export default Numbers;

