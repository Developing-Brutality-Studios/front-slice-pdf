//import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import { postUpdated } from '../redux/reducer'
import '../css/styles-nav.css'

const Header = () => {
    const dispatch = useDispatch()    
    const posts = useSelector(state => state.posts)


    const log = () => {
        const existingtoken = posts.find(post => post.token === localStorage.getItem('Session'))
        console.log(existingtoken)
        if ( typeof existingtoken === 'undefined') {
            return <Link to='./Login' >Login</Link>
        }    
        if (existingtoken.token === null) {
            return <Link to='./Login' >Login</Link>
        }
        return <Link to='./Login' onClick={tok} >Logaut</Link>

    }

    const tok = () => {
        localStorage.removeItem('Session')
        dispatch(
            postUpdated({
               token:localStorage.getItem('Session'),
               newToken:''     
            })
        )  
            
    }

    return (
        <div>
            <nav>
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className="checkbtn">
                    <FontAwesomeIcon icon={faAlignJustify} />
                </label>
                <label className={'logo'}>Header</label>
                <ul>
                    <li><a href="/">HomePagae</a></li>
                    <li><a href="/">nosotros</a></li>
                    <li>{log()}</li>
                </ul>
            </nav>
        </div>
    )
}
export default Header