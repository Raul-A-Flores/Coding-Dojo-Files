import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const Author =() =>{

    const [allAuthors, setAllAuthors] = useState([])
    const [ deleteToggle, setDeleteToggle] = useState(false);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/Authors")
        .then(res=>{
            console.log("response", res);
            setAllAuthors(res.data.Authors);
            

            //set delete toggle works but we will use props to change the state of the page 
        })
        .catch(err=>{
            console.log("err", err)
        })
    
        
    },[deleteToggle]);

    const deleteHandler = (id) =>{

       
        axios.delete(`http://localhost:8000/api/Authors/${id}`)
            .then(res=>{
                console.log(res)
                setDeleteToggle(!deleteToggle);
                
                
            })
            
            .catch(err=>console.log(err))
    }

    

    return(
        <>
            <h2>Favorite Authors</h2>
            <h4>Add an Author</h4>
         
                
            {
                allAuthors.map((author,idx)=>{
            return(
                   <div key={author._id}>
                        <p>{author.name}</p>
                        <p><Link to={`/edit/${author._id}`}className="btn btn-warning">Edit</Link></p>
                        <button  onClick={(e)=>{deleteHandler(author._id)}} className='btn btn-dark'>Delete</button>
                   </div>
                   )})
            }
        </>

    )
}

export default Author;