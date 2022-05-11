import React from 'react';
import { useParams } from 'react-router-dom';

const Strings = (props) =>{
    const {string} = useParams();

    return(
        <h2>{string}</h2>
    )
}

export default Strings;