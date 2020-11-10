import {Component} from 'react'
import '../css/styles-login.css';
import { Link} from 'react-router-dom'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            passwoed: ''
        }
    }
    onImputChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        e.preventDefault();        
    }

    onSubmit = () =>{
        const state = this.state
        console.log(state.passwoed)
        console.log(state.username)
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