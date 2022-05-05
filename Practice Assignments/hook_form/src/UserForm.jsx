import React, { useState } from  'react';
import  './components/Styling.css';
    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");  

    const [titleError, setTitleError] = useState("");

    const handleTitle = (e) => {
        setfirstName(e.target.value);
        if(firstName< 1) {
            setfirstName("First Name is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("First Name must be 3 characters or longer!");
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
    <div className='container'>
        <div className='box'>
            <form onSubmit={ createUser }>
                <div className='form-group'>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
                    {
                    titleError ?
                    <p style={{color:'red'}}>{ titleError }</p> :
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
        <div className='box'>
                <h3>Your Form Data:</h3>
                <div className='form-group'>

                    { firstName}
                </div>
                <div className='form-group'>
                    { lastName}
                </div>
                <div className='form-group'>
                    { email}
                </div>
                <div className='form-group'>
                    { password}
                </div>
                <div className='form-group'>

                    { confirmPassword}
                </div>
        </div>
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Title: </label>
                <input type="text" onChange={ handleTitle } />
                {
                    titleError ?
                    <p style={{color:'red'}}>{ titleError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create Movie" />
        </form>
    </div>
    );
};
    
export default UserForm;
