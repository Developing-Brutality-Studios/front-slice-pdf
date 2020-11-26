import { useState } from 'react';
import axios from 'axios';
import Carts from './Carts';
import Sub from './Sub'
import '../css/styles-carts.css'
const Home = () => {

    const [ , setLibros] = useState('');

    var tok = localStorage.getItem('Sesion')

    axios.get('http://localhost:8080/inicio',
 
        {
            headers: {
                'token': tok
            }
        }
     
    ).then((e) => {        
               
        setLibros(e.data.Value)
        console.log(e.data.Value)

    }).catch(function (error) {
        console.log(error);
    })

    return (
        <div>
            <div className="container-card">
                <Carts
                    title='Un mundo feliz'
                    parrafo='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor'
                    image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VRgBiLoOpkvrh8V7kQ1KBAHaKe%26pid%3DApi&f=1'
                />
            </div>
            <br /><br />
            <Sub />
        </div>
    )


}

export default Home