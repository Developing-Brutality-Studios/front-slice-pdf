import { Component } from 'react';
import Carts from './Carts';
import Sub from './Sub'
import '../css/styles-carts.css'
export default class Home extends Component {
/*
    constructor(props) {
        super(props)
        this.state = {
            archivos: []
        }
    }
    subirArchivos = (e) => {
        this.setState({ archivos: e })
    }
    insertarArcivos = async () => {
        const ar = this.state.archivos;
        console.log(ar[0])
        await axios.post("http://localhost:8080/upload", ar[0])
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
   }
            <input type="file" onChange={(e) => this.subirArchivos(e.target.files)} />
                    <br />
                    <button onClick={() => this.insertarArcivos()}>subir</button>

*/
    render() {
        return (
            <div>
                <div className="container-card">
                    <Carts
                        title='Un mundo feliz'
                        parrafo='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor'
                        image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VRgBiLoOpkvrh8V7kQ1KBAHaKe%26pid%3DApi&f=1'
                    />                  
                </div>
                <br/><br/>
                <Sub/>
            </div>
        )

    }
}
