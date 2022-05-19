import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const EditProduct =() => {
    //keep track of what is being typed via useState hook
    const{id} = useParams();
    const [productInfo, setProductInfo] = useState({})
    //handler when the form is submitted



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Products/${id}`)
            .then( res=>{
                console.log(res);
                setProductInfo(res.data.Products)

            })
            .catch(err =>
                console.log(err))
            },[]);

    
    return (
        <form >
            <p>
                <label>Title:</label><br/>
                <input type="text" />
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="text"  />
            </p>
            <p>
                <label>Description:</label><br/>
                <input type="text"  />
            </p>
            <input type="submit" value="Submit"/>
        </form>
    )
}
export default EditProduct;