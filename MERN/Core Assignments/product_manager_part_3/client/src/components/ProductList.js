import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const ProductList=()  => {
    const [Products, setProducts] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/Products')
            .then(res=>setProducts(res.data.Products))
            .catch(err=>console.log("Error", err))         
    }, [])
    return (
        <div>

         
        </div>
    )
}

export default ProductList;
    
