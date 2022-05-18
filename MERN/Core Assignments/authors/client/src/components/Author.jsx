import React from 'react';

const Author =() =>{

    return(
        <>
            <h2>Favorite Authors</h2>
            <h4>Add an Author</h4>
            <div className="container center">
            <div className="row justify-content-center">
                    <table className='table col-6'>
                        <thead>
                            <th scope='col'>Author</th>
                            <th scope='col'>Actions</th>

                        </thead>
                        <tbody>
                            <td scope="col">

                            </td>
                            <td scope="col">
                                <button className='btn btn-warning mr-2'>Edit</button>

                                <button className='btn btn-dark'>Delete</button>
                            </td>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Author;