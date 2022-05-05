import React, { Component} from 'react';

class PersonCard extends Component{

    render(){

        const handleClick = () => {
            console.log("Hello sir")
        }

        
      

        const handleClicks = (name, e) => {
            console.log("Hello Event", name, e.target)
        }
        const { firstName , lastName, age, hairColor} = this.props;
        return(
            <div class="container">
                <h3>{ lastName} , { firstName}</h3>
                <h3>Age: { age}</h3>
                <h3>Hair Color: { hairColor}</h3> 
                <button onClick={ (e)=> handleClicks}>Birthday Button for {firstName} {lastName}</button>
                <button onClick={handleClick}>Click</button>
                



                
            </div>
        );
    }
}

export default PersonCard;