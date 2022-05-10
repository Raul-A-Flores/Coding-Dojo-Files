import React, { useState } from  'react';

    
    
const UserForm = (props) => {
let [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        
        
        console.log("Welcome", newUser);
        
    };
    
    

    
    return(
    <div className='container'>
        
        <div>
            <form className='form-control' onSubmit={ createUser }>
                <h2>Create a User</h2>
                <div className='form-group p-4'>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
                    {firstName.length < 2 && firstName.length > 0? (<p>First Name must be at least 2 characters</p>) : null}

                    
                </div>
                <div className='form-group p-4'>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setlastName(e.target.value) } />
                    {lastName.length < 2 && lastName.length > 0? (<p>Last Name must be at least 2 characters</p>) : null}
                </div>
                <div className='form-group p-4'>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                    {email.length < 2 && email.length > 0 ? (<p>Email must be at least 2 characters</p>) : null}
                    {email === email.includes("@") ? (<p>Must be a valid email</p>):null}

                </div>
                <div className='form-group p-4'>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                    {password.length < 8 && password.length > 0? (<p>Passowrd must be at least 8 characters</p>) : null}

                </div>
                <div className='form-group p-4'>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
                    {password !== confirmPassword  && confirmPassword.length > 0 ? (<p>Password must match</p>) : null}

                    
                </div>
                
                <input type="submit" value="Create User" />
            </form>
        </div>
        
    </div>
    );
};
    
export default UserForm;
