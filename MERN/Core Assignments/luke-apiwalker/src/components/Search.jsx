import React from "react";









const Search = () =>{

    return(

        <div className="container m-4">
            <h1>Luke ApiWalker</h1>
            <form className="form-control center">
                <div className="form-group">
                    <label >Search for:  </label>
                    <select>
                        <option>People</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <label>ID:</label>
                    <input type="text"></input>
                </div>
                <div className="form-group mt-3">
                    <button className="btn btn-primary">Search</button>
                </div>
            
                
                
            </form>
        </div>
    )
}

export default Search;