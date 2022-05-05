import React, { useState } from  'react';

    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorMessage, seterrorMessage] = useState(false);


    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        seterrorMessage(true);
    };

    const validations = (e) => {
        
        if(e.target.value.length < 1){
            seterrorMessage("Is Required!");
        } else if ( e.target.value.length < 3 ){
            seterrorMessage("Must be at least 3 characters!")
        }
    }

    
    return(
    <div className='container'>

        <div className='box'>
            <form onSubmit={ createUser }>
                
                <div className='form-group'>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
                    {
                    errorMessage?
                    <p style={{color:'red'}}>{ errorMessage }</p> :
                    ''
                }
                    
                </div>
                <div className='form-group'>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setlastName(e.target.value) } />
                </div>
                <div className='form-group'>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className='form-group'>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className='form-group'>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
                </div>
                
                <input type="submit" value="Create User" />
            </form>
        </div>
        
    </div>
    );
};
    
export default UserForm;
