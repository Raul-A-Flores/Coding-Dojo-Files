import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams} from 'react-router-dom';





const OneProduct = (props) => {
    const {id} = useParams();

    let [Product, setProductInfo ] = useState({})

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
        <div className='container'>
            <div className='cards'>
                <div className='card mx-auto'>
                <p>{id}</p>
                    
                    
                    

                </div>
              
            </div>
 

        
        </div>
    )
}

export default OneProduct;