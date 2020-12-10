import { useState } from 'react';
import axios from 'axios';
import Carts from './Carts';
import Sub from './Sub'
import '../css/styles-carts.css'
const Home = () => {

<<<<<<< HEAD
    const [libros , setLibros] = useState('');
   
    
    if(libros === ''){
            axios.get('http://localhost:8080/inicio', 
            {
                headers: {
                    'token':  localStorage.getItem('Session')
                }
=======
    const [ , setLibros] = useState('');

    var tok = localStorage.getItem('Session')

    axios.get('http://127.0.0.1:8080/inicio',
 
        {
            headers: {
                "token": tok,
                "Access-Control-Allow-Origin": "*",
                
>>>>>>> c8e63101a9e6910269550bf00880cd34370ceca2
            }
        
        ).then((e) => {                       
            setLibros(e.data)        

        }).catch(function (error) {
            console.log(error);
        })   
    }
      
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