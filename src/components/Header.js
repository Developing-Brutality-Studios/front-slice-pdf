import { Component } from 'react';

import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from 'react-router-dom'
import '../css/styles-nav.css'
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {           
            token: localStorage.getItem('Session')
        }
        console.log(this.state.token)               
    }
    token = () =>{
        localStorage.removeItem('Session');
        this.setState({token:null})
    } 
    log= (token) =>{
        if(token){
            return <Link to='./Login' onClick={this.token}>logaut</Link>  

        } else{
            return <Link to='./Login' >login</Link>
        }

    }
    
    render() {
        const tok= localStorage.getItem('Session')
        return (
            <body>
                <nav>
                    <input type="checkbox" id="check"></input>
                    <label htmlFor="check" className="checkbtn">
                        <FontAwesomeIcon icon={faAlignJustify} />
                    </label>
                    <label className={'logo'}>Header</label>
                    <ul>
                        <li><a  href="/">HomePagae</a></li>
                        <li><a  href="/">nosotros</a></li>
                        <li>{this.log(tok)}</li>                        
                    </ul>
                </nav>
            </body>
        )
    }
}