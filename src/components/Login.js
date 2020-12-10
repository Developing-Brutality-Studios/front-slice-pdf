import { useState } from 'react'
import '../css/styles-login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setTok } from '../redux/reducer'
import { Link, Redirect } from 'react-router-dom'

export const connect = async (username, password) => {
    var token = false
    const data = {
        'Correo': username,
        'Clave': password
    }
    const user = JSON.stringify(data)

    if(token){
        await axios.put('http://localhost:8080/iniciosesion',
        user
    ).then((e) => {
        localStorage.setItem('Session', e.data.Value);        
    }).catch(function (error) {
        console.log(error);
    }).then(() =>{
        token = localStorage.getItem('Session')
        console.log(token)
    })
    }

  
    

    return token
}


const Login = (t) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

   
    const dispatch = useDispatch()

    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)


    const onSubmit = async (e) => {
        e.preventDefault();
        const ll = await connect(username, password)             
        if(ll){
            setToken(ll)
        }
        else{
            console.log('Error')
        }

    }
    
    if (token === '') {
        return (
            <form className="box" onSubmit={onSubmit}>
                <h2>Loging</h2>
                <input onChange={onUsernameChanged} type="text" name="username" placeholder="Username" />
                <input onChange={onPasswordChanged} type="password" name="password" placeholder="Password" />
                <button type="submit" value="Login">Loging</button>
                <Link to='./newUser'><h3>Nuevo usuario</h3></Link>
            </form>

        )
    } else {
        
        dispatch(
            setTok( token || '')
        )
        return (<Redirect to='/home' />)
    }




}

export default Login