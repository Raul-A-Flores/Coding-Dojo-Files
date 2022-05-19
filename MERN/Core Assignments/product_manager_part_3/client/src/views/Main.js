import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';


    
const Main = () =>{
    
    
    return (
        <>
            <ProductForm/>
            <hr/>
            <ProductList />
        </>
    )
}
export default Main;
