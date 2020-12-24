import { useState } from 'react';
import axios from 'axios';
import Carts from './Carts';
import Sub from './Sub'
import '../css/styles-carts.css'
import { Link, Redirect } from 'react-router-dom'
const Home = () => {
const [libros , setLibros] = useState([]);
var arra=[];
    if(libros.length == 0){
            axios.get('http://localhost:8080/inicio', 
            {
                headers: {
                    'token':  localStorage.getItem('Session')
                }
            }
        
        ).then((e) => {                     
            setLibros(e.data.libros)
            console.log("libros")
            console.log(e.data)
            arra=e.data.libros
            console.log("arrrra")
            console.log(arra)
        }).catch(function (error) {
            console.log(error);
        })   
    }
    if(localStorage.getItem('Session')!=null){
        console.log("arrrra")
        console.log(arra)
        return(<div>
        <div className="container-card">
            {
                libros.map((libro)=><Carts title={libro.Archivo} parrafo='Lorem Ipsum es simplemente el texto de relleno de las imp'  image={libro.Imagen}></Carts>)
            }
            
            
        </div>
        <br /><br />
        
    </div>);
    } else{
        return(
            <Redirect to='/' />
        )
    }
    


}

export default Home