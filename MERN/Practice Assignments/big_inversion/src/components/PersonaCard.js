import React from 'react';

        const handleClicks = (name, e) => {
            console.log("Hello Event", name, e.target)
        }
        const PersonaCard = props => {

        return(
            <div>
                <h3>{ props.lastName} , { props.firstName}</h3>
                <h3>Age: { props.age}</h3>
                <h3>Hair Color: { props.hairColor}</h3> 
                <button onClick={ (e)=> handleClicks}>Birthday Button for {props.firstName} {props.lastName}</button>

            </div>
        )
    };


export default PersonaCard;