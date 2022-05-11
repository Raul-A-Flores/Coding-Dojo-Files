import React, {useState} from 'react';

const Todo = () =>{

    const [todoList, setTodoList] = useState("")
    const [todosList, setTodosList] = useState([]);

    const handleToDo = (e) =>{
        e.preventDefault();
        setTodosList([...todosList, todoList])
        


    };

    const handleDelete =(i) =>{
        

        
    }
    return(
        <div className='container'>

            <form className='form-group ' onSubmit ={(e) => {
                handleToDo(e);
            }}>


                <h1> To Do List</h1>
                <input onChange ={(e) =>{
                    setTodoList(e.target.value)
                }}

                    className="form-control col-6" type="text" placeholder='Add todo'/>
                
                <button className="btn btn-primary mt-3" type='submit'> Add</button>
            </form>
            
            


            {
            todosList.map((todoList,i) => {
                return(
                    <div key ={i}>
                        <span>{todoList}</span>
                        <button className='btn btn-dark'>Delete</button>
                    </div>
                );
                })
            }
        </div>
        
    )
}

export default Todo;