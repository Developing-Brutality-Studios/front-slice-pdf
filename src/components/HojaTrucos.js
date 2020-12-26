import axios from "axios";

export const Map = ()=>{
    var hoja = ''

    if (hoja === ''){
        hoja = axios.get('http://localhost:8080/cheatsheets',{
            headers: {
                token: localStorage.getItem("Session"),
              }
        }).then((e) =>{
            return e.data;            
        })
    }
   return hoja

}

export default Map