import { Component } from 'react';
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/styles-nav.css'
export default class Home extends Component {
    
    render() {
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
                        <li><a  href="/">login</a></li>
                    </ul>
                </nav>
            </body>
        )
    }
}