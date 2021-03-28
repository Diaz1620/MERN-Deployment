import {Link} from '@reach/router';

const AuthorForm = props => {
    const {inputs,handleInputChange,handleSubmit,title,errors} = props;

    return(
        
        <form onSubmit={handleSubmit} className="col-6 mx-auto" >
            <h2 className="text-center">{title}</h2>
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            name="name" 
            className="form-control" 
            onChange={handleInputChange}
            value={inputs.name}
            />
            <span className="text-danger">
                    {errors.name ? errors.name.message : ""}
                </span>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary"/>
            <Link to='/' className="btn btn-primary">Cancel</Link>
        </form>
    )
}

export default AuthorForm;