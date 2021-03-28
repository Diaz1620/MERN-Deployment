import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [authors,setAuthors] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data.results))
            .catch(err => console.log(err))
    },[])

    const handleDestroyAuthor = id => {
        Axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthors(res.data.results))
            .catch(err => console.log(err))
    }

    return(
        authors ? 
        <div>
            <Link to="/new">Add an author</Link>
        <table className="table table-hover col-6 mx-auto">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map((a,i) => {
                        return <tr key={i}>
                                    <td>{a.name}</td>
                                    <td>
                                    <Link className="btn btn-warning btn-outline-info" to={`/edit/${a._id}`}>Edit</Link>
                                    <button 
                                    className="btn btn-danger btn-outline-dark"
                                    onClick={() => handleDestroyAuthor(a._id)}>Delete</button>
                                    </td>
                            </tr>
                    })
                }
            </tbody>
        </table> 
        </div>
        : <h2>Loading...</h2>
    )
}

export default Main;