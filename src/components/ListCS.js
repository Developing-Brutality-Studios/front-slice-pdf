import React, { Component } from "react";
import axios from "axios";
import "../css/styles-carts.css";
export default class ListCS extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cheatsheets: []      
    };
    this.cargar();    
  }
  
  cargar() {
    if (this.state.cheatsheets.length === 0) {
      axios
        .get("http://localhost:8080/cheatsheets", {
          headers: {
            token: localStorage.getItem("Session"),
          },
        })
        .then((e) => {
          this.setState({ cheatsheets: e.data.CheatSheets });
          if (this.state.cheatsheets == null) {
            this.setState({ cheatsheets: [] });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  cNotas(i){
        const Json = {
          'id': i.ID,
          'usuario': i.Usuario,
          'titulo': i.Titulo
      }
      console.log(Json)
      axios
          .get('http://localhost:8080/cheatsheets', Json, {
              headers: {
                  token: localStorage.getItem("Session"),
              },
          }).then((e) =>{
              console.log(e.data) 
          } )
          .catch((err) => {
              console.log(err);
          });
  } 

  render() {
    return (
      <div className="listcs">
        <div className="titulocs" key="trtrt" id="miscs">
          CheatSheets
        </div>
        {this.state.cheatsheets !== null &&
          this.state.cheatsheets.map((sheet) => (
            <div  onClick={this.cNotas(sheet)} className="titulocs" key={sheet.ID}>
              {sheet.Titulo}
            </div>
          ))}
      </div>
    );
  }
}
