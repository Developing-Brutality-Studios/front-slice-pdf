import {Component} from 'react'
import '../css/styles-login.css';
export default class Login extends Component {
    render(){
        return (
            <form className="box">
            <h2>Loging</h2>                                                
                <input type="text" name="username" placeholder="Username"/>                        
                <input type="password" name="password" placeholder="Password"/>                       
            </form>      
        )
    }
}