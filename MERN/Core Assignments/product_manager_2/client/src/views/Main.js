import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { useState } from "react";

const Main =()=>{

    const[hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    return( 
        <>
            <ProductForm setHasBeenSubmitted ={setHasBeenSubmitted}
                hasbeenSubmitted={hasBeenSubmitted}/>
            <hr/>
            <ProductList hasbeenSubmitted ={hasBeenSubmitted}/>
        </>

    );
}

export default Main;