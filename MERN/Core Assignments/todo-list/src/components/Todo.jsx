import React, {useState} from 'react';

const Todo = () =>{

    const [todoList, setTodoList] = useState("")
    const [todosList, setTodosList] = useState([]);

    const handleToDo = (e) =>{
        e.preventDefault();
        setTodosList([...todosList, todoList])
        


    };

    const handleDelete =(deleteItem) =>{
        const filteredTodos = todosList.filter((todos, i) =>{
            return i !== deleteItem;

        })
        setTodoList(filteredTodos);
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
            todosList.map((todoItem,i) => {
                return(
                    <div key ={i}>
                        <span>{todoItem}</span>
                        <button className='btn btn-dark' onClick={()=>{
                            handleDelete(todoItem)}}
                            >Delete</button>
                    </div>
                );
                })
            }
        </div>
        
    )
}

export default Todo;