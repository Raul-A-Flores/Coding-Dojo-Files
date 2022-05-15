import React, {useState, useEffect} from 'react';


import axios from 'axios';
import { Link } from '@reach/router';


const ProductList = (props) =>{
    const{hasbeenSubmitted} = props;

    const [products, setProducts] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((response)=> {
            console.log(response.data);
            setProducts(response.data);

        
        })
        .catch((err)=>console.log(err))


    }, [hasbeenSubmitted]);
    return(
        <>
            <h2>All Products: </h2>
            {products.map((products,index) => (
                //<p key={index}>{products.title}</p>
                <div key={index}>
                    {" "}
                    <Link to={`${products._id}`}>{products.title}</Link>

                </div>
                ))};
        </>
    );
}

export default ProductList;