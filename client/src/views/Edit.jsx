import {useState,useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import Axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const Edit = props => {
    const [author,setAuthor] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(res => setAuthor(res.data.results[0]))
            .catch(err => console.log(err))
    },[props])

    const [errors,setErrors] = useState({
        name:""
    })

    const handleChange = e => {
        setAuthor({
            ...author,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.put(`http://localhost:8000/api/authors/${props.id}`,author)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <>
            <Link to='/'>Home</Link>
            <AuthorForm 
            inputs={author}
            title="Edit this author:"
            handleInputChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            />
        </>
    )
}

export default Edit;