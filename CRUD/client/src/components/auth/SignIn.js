import React, { useState } from 'react';
import axios from 'axios'

const SignIn = () => {
    const [connexion, setConnexion] = useState({email: '', password: ''})
    const handleChange = (e) => {
        setConnexion({...connexion, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            const rep = await axios.post('http://localhost:5000/signin', connexion)
            const token = rep.data.token
            localStorage.setItem('token', token)
            window.location = '/'

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input type="email" name='email' id='email' onChange={handleChange}/>
                <label htmlFor="password">mot de passe</label>
                <input type="password" name="password" id="password" onChange={handleChange}/>
                <button type="submit">se connecter</button>
            </form>
        </div>
    );
}

export default SignIn;
