
import React from 'react';
import {Component} from 'react';

class PersonaCard extends Component{
    render(){
        return <h4>{ this.props.firstName} 
        {this.props.lastName}
        {this.props.age}
        {this.props.hairColor}
        
        </h4>;
        
        

    }
}

export default PersonaCard;