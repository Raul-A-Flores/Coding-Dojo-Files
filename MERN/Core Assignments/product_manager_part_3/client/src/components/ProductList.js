import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList=()  => {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/Products')
            .then
            (res=>{
                console.log("response", res.data.Products)
                setProducts(res.data.Products)
            })
            
                .catch
            (err=>console.log("Error", err))         
    }, [])

    const deleteHandler=(id)=>{
        axios.delete(`http://localhost:8000/api/Products/${id}`)
            .then(res=>
                console.log("deleted"))
    }
    return (
        <div> 
        
         <h2>All Products</h2>

         {
            products.map((oneProduct, idx)=>{
                return(
                    <div key={oneProduct.id}>
                        <Link to={`/Products/${oneProduct._id}`}>{oneProduct.title}</Link>
                        <p>{oneProduct.price}, {oneProduct.description}</p>
                        <p><Link className='btn btn-warning' to={`/edit/${oneProduct._id}`}>Update</Link></p>
                        <button className='btn btn-danger' onClick={(e)=>{deleteHandler(oneProduct._id)}}>Delete</button>
    
                        
                    </div>

                )
                

            })

        }
        </div>
    )
}

export default ProductList;
    
