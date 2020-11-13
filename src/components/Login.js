import {Component} from 'react'
import '../css/styles-login.css';
import axios from 'axios';
import { Link} from 'react-router-dom'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onImputChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        e.preventDefault();        
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
                ,{
                    header: {
                        'Content-Length': 1000,
                        'Host': "127.0.0.0.1",
                        'Origin': 'http://localhost:3000',
                        'Content-Type': 'application/json'
                    }            
                }
            ).then((e) =>{
                console.log('echo')
                console.log(e.data)
            })
        
        
    }
    
    render(){
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
}