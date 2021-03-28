import {useState} from 'react';
import {Link, navigate} from '@reach/router';
import Axios from 'axios';
import AuthorForm from '../components/AuthorForm';


const Create = props => {
    const [form,setForm] = useState({
        name:""
    })

    const [errors,setErrors] = useState({
        name:""
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.post("http://localhost:8000/api/authors",form)
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
            inputs={form}
            title="Add a new author:"
            handleInputChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            />
        </>
    )
}

export default Create;