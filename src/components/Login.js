import {Component} from 'react'
import '../css/styles-login.css';
import axios from 'axios';
import Header from './Header';

import { Link, Redirect } from 'react-router-dom'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            token: null
        }
    }
    onImputChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        e.preventDefault();        
    }
    stateToken = () =>{
        this.setState({token:localStorage.getItem('Session')})
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const stat = this.state

        const data = {            
                'Correo': stat.username,               
                'Clave': stat.password
            }
        
        const user = JSON.stringify(data)     
            
            axios.put('http://localhost:8080/iniciosesion', 
                user              
            ).then((e) =>{                                
                localStorage.setItem('Session', e.data.Value);
                this.stateToken()
                return <Header token={this.state.token} />

            }).catch(function (error) {
                console.log(error);
              }); 
        
        
    }
    
    render(){
        if (!this.state.token){
            return (
                <form className="box" onSubmit={this.onSubmit}>
                    <h2>Loging</h2>                                                
                    <input onChange={this.onImputChanges} type="text" name="username" placeholder="Username"/>                        
                    <input onChange={this.onImputChanges} type="password" name="password" placeholder="Password"/>   
                    <button type = "submit" value="Login">Loging</button> 
                    <Link to='./newUser'><h3>Nuevo usuario</h3></Link>
                </form>      
            )
        }
        return <Redirect to="/" />;
       
    }
}