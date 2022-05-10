import React from 'react';

const Todo = () =>{

    return(
        <div className='container'>

            <form className='form-group col-6'>
                <h1> To Do List</h1>
                <input className="form-control col-6" type="text" placeholder='Add todo'/>
                
                <button className="btn btn-primary mt-3" type='submit'> Add</button>
            </form>
            
            <button className='btn btn-dark'>Delete</button>
        </div>

    )
}

export default Todo;