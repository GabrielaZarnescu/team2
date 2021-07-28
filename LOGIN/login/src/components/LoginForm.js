import React, { useState } from 'react';

const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({username: "", email:"", password:""});
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit= {submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error !== "")? (<div className='error'> {error}</div>): ""}
                <div className='form-grup'>
                  <label htmlFor='email'>Username:</label>  
                  <input type='username' name='username' id='username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} ></input>
                </div>
                <div className='form-grup'>
                  <label htmlFor='email'>Email:</label>  
                  <input type='email' name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className='form-grup'>
                  <label htmlFor='password'>Password:</label>  
                  <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                    </div>
                    <input type="submit" value="LOGIN"></input>
                </div>        
        </form>
    )
}

export default LoginForm;
