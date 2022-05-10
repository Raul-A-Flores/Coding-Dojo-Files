import React, {useState} from 'react';

const PersonaCard =(props) =>{




        let { firstName, lastName, hairColor} = props;
        let[age, setAge] = useState(props.age)
        const increaseAge = () =>{
            age++;
            console.log(age)
            setAge(age)
        }

        return(
            <div>
                <h3>{ lastName} , { firstName}</h3>
                <h3>Age: { age}</h3>
                <h3>Hair Color: { hairColor}</h3> 
                <button onClick={increaseAge}>Birthday Button for {firstName} {lastName}</button>

            </div>
        )
    }


export default PersonaCard;