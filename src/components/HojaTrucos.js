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

export const NewSheet = () => {
    const Json = {
        'id': '',
        'usuario': '',
        'titulo': 'hola_mundo'
    }
    axios
        .post('http://localhost:8080/addCheatSheet', Json, {
            headers: {
                token: localStorage.getItem("Session"),
            },
        })
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



export default Map