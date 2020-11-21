//import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Redirect } from 'react-router-dom'
import { postUpdated } from '../redux/reducer'
import '../css/styles-nav.css'

const Header = ({posts}) => {
    const dispatch = useDispatch()     

    const log = () => {
        console.log(posts)
        if ( posts[0].token === '' || posts[0].token === null  ) {

            return <Link to='/' >Login</Link>
        } 
            return <Link to='/' onClick={tok} >Logaut</Link>        
                
  

    }

    const tok = () => {        
         dispatch(
            postUpdated({
               token:localStorage.getItem('Session'),
               newToken:''     
            })
        )
        localStorage.removeItem('Session')
        return <Redirect to='/'/>
           
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
                    <li><a href="/home">HomePagae</a></li>
                    <li><a href="/">nosotros</a></li>
                    <li>{log()}</li>
                </ul>
            </nav>
        </div>
    )
}
export default Header