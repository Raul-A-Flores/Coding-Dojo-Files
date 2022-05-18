import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'





const AddAuthor = () => {

  let [name, setName] = useState("");
  const history = useHistory();
  const[errors, setErrors] = useState({});

  const addAuthor=(e)=>{
    e.preventDefault();

    // all info can be packaged into object

    let formInfo ={ name}

    axios.post("http://localhost:8000/api/Authors", formInfo)
    .then(res=>{
        console.log("response after posting form ", res)
        setName("");
        if (res.data.error){
          setErrors (res.data.error.errors) ;}
          else{history.push('/');}
          
    })
    .catch(err=>{
        console.log("err", err)
    })
}
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-6" onSubmit={addAuthor}>
          <div className="form-group">
            <label htmlFor="">Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" value={name}/>
            <p className="text-danger">{errors.name?errors.name.message : null}</p>
                          
          </div>
          
          
            <Link to ="/" className='btn btn-dark'>Cancel</Link>
            <input type="submit" value="Submit" className="btn btn-dark mx-1 "/>
          
        </form>
        
      </div>
    </div>



  )
}

export default AddAuthor