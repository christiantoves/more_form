import React, {useState} from 'react';

const Form = props => {
    
    const [formState, setFormState] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "" ,
        confirmPassword :""
    })

    const [validState, setValidState] = useState({
        firstName : false,
        lastName : false,
        email : false,
        password : false ,
        confirmPassword : false
    })

    const onChange = e =>{
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        
        if(formState.firstName.length < 2){
            var firstName = true
        }
        if(formState.lastName.length < 2){
            var lastName = true
        }
        if(formState.email.length < 5){
            var email = true
        }
        if(formState.password.length < 8 ){
            var password = true
        }
        if(formState.password == formState.confirmPassword){
            var confirmPassword = true
        }
        
        
        setValidState({
            ...validState,
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName" />
                { (validState.firstName) ? <p>Your First Name must be more than 2 characters</p> : null }
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" />
                { (validState.lastName) ? <p>Your Last Name must be more than 2 characters</p> : null }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email" />
                { (validState.email) ? <p>Your Email must be more than 5 characters</p> : null }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type= "password" name="password" />
                { (validState.password) ? <p>Your Password must be more than 8 characters</p> : null }
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} type= "password" name="confirmPassword" />
                { (validState.confirmPassword) ? <p>Your passwords must match</p> : null }
            </div>
            <button type = "submit">Submit</button>
        </form>
    )
}
export default Form