import React from 'react'
import axios from 'axios';
import { useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useEffect, useState } from 'react';

const EditAuthor=()=>{

  const {_id} = useParams();
  const [authorInfo, setAuthorInfo] = useState({});
  let [errors, setErrors] = useState({});
  const history = useHistory();
  


    useEffect(()=>{
      axios.get(`http://localhost:8000/api/Authors/${_id}`)
          .then( res=>{
              console.log(res)
              setAuthorInfo(res.data.Author)
              

          })
          .catch(err =>
              console.log(err))
          },[]);

    const submitHandler = (e) =>{

            e.preventDefault();
            axios.put(`http://localhost:8000/api/Authors/${_id}`, authorInfo)
                .then(res=>{
                    console.log(res)
                    if (res.data.error){
                        setErrors (res.data.error.errors) ;
                    }else{
                    history.push("/");
                    }
                })
                
                .catch(err=>console.log(err))
        }
        const changeHandler =(e)=>{

          setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
          })
          


        }
    

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-6" onSubmit={submitHandler}  >
          <div className="form-group">
            <label htmlFor="">Edit {authorInfo.name}</label>
            <input type="text" name="name" onChange={changeHandler} className="form-control" value={authorInfo.name}/>
          </div>

            <Link to ="/" className='btn btn-dark'>Cancel</Link>
            <input type="submit" value="Submit" className="btn btn-dark mx-1 "/>
          
        </form>
        
      </div>
    </div>



)
}
export default EditAuthor;