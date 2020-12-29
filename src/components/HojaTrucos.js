import { faDivide } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from 'react'

export const Map = () => {
    var hoja = ''

    if (hoja === '') {
        hoja = axios.get('http://localhost:8080/cheatsheets', {
            headers: {
                token: localStorage.getItem("Session"),
            }
        }).then((e) => {
            return e.data;
        })
    }
    return hoja

}

export const NewSheet = (i) => {
    const Json = {
        'id': '',
        'usuario': '',
        'titulo': i
    }
    axios
        .post('http://localhost:8080/addCheatSheet', Json, {
            headers: {
                token: localStorage.getItem("Session"),
            },
        }).then((e) =>{
            return e.data
        } )
        .catch((err) => {
            console.log(err);
        });
}

export const Lector = async () => {
    const arr = await Map();
    const Arr = arr.CheatSheets

    if (!Arr) {
        return false
    } else {
        return Arr
    }
}


export const NuevoTruco = (i) =>{
    const[nombre,setNombre] = useState('')
    return (
        <div>
            <input type='text' onChange={(e) => setNombre(e) }/>
            <button onClick={NewSheet(nombre)}>Nueva</button>
        </div>
    )
}


export default Map