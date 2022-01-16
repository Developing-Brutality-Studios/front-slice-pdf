import React, { Component } from "react";
import axios from "axios";
import "../css/styles-list.css";
export default class ListCS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cheatsheets: [],
      hoja: '',
      titulos: [],
      contenido: '',
      tit: false,
      con: ''
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
  mostrar(arr) {
    this.setState({ titulos: arr })

  }
  notas(nota) {
    return (
      <div>
        {nota}
      </div>
    )
  }

  cNotas(i) {
    
    const notas = [{
      ID: "5feaacac0d21a30522c98e30",
      Titulo: "ejemplo1",
      Cheatsheet: "5feaac630d21a30522c98e2b",
      Contenido: "Associate\tDirector\tof\tMarketing:\tSarah\tPanella"
    },
    {
      ID: "5feaad420d21a30522c98e35",
      Titulo: "ejemplo2",
      Cheatsheet: "5feaac630d21a30522c98e2b",
      Contenido: "Every\tbook\tyou’ve\tever\tread\tperpetuates\ta\tbig\tfat\tlie.\tAnd\tI’m\there\tto\tout\tthepublishing\tindustry’s\tdirty\tlittle\tsecret:\tBooks\tare\tnot\t“by”\tonly\tone\tperson.Yes,\tyou\tsee\tonly\tone\tname\ton\tmany\tbook\tcovers\t(including\tthis\tone),\tbut\tittakes\ta\tteam\tof\tdedicated\tpeople\tto\tpull\toff\tthe\tfinal\tproduct.\tAuthors\tcouldnot\tdo\tit\talone;\tI\tcertainly\tcould\tnot\thave\tdone\tit\talone.\tSo\tI\twant\tto\tthank\tallthose\twho\thelped\tmake\tthis\tnew\tedition\ta\trealit"
    },
    {
      ID: "5feaad420d21a305dsa22c98e35",
      Titulo: "ejemplo3",
      Cheatsheet: "5fe23aac630d21a30522c98e2b",
      Contenido: "Every\tbook\tyou’ve\tever\tread\tperpetuates\ta\tbig\tfat\tlie.\tAnd\tI’m\there\tto\tout\tthepublishing\tindustry’s\tdirty\tlittle\tsecret:\tBooks\tare\tnot\t“by”\tonly\tone\tperson.Yes,\tyou\tsee\tonly\tone\tname\ton\tmany\tbook\tcovers\t(including\tthis\tone),\tbut\tittakes\ta\tteam\tof\tdedicated\tpeople\tto\tpull\toff\tthe\tfinal\tproduct.\tAuthors\tcouldnot\tdo\tit\talone;\tI\tcertainly\tcould\tnot\thave\tdone\tit\talone.\tSo\tI\twant\tto\tthank\tallthose\twho\thelped\tmake\tthis\tnew\tedition\ta\trealit"
    },
    {
      ID: "5feaaasasad420d21a30522c98e35",
      Titulo: "ejemplo4",
      Cheatsheet: "5fedsaaac630d21a30522c98e2b",
      Contenido: "Every\tbook\tyou’ve\tever\tread\tperpetuates\ta\tbig\tfat\tlie.\tAnd\tI’m\there\tto\tout\tthepublishing\tindustry’s\tdirty\tlittle\tsecret:\tBooks\tare\tnot\t“by”\tonly\tone\tperson.Yes,\tyou\tsee\tonly\tone\tname\ton\tmany\tbook\tcovers\t(including\tthis\tone),\tbut\tittakes\ta\tteam\tof\tdedicated\tpeople\tto\tpull\toff\tthe\tfinal\tproduct.\tAuthors\tcouldnot\tdo\tit\talone;\tI\tcertainly\tcould\tnot\thave\tdone\tit\talone.\tSo\tI\twant\tto\tthank\tallthose\twho\thelped\tmake\tthis\tnew\tedition\ta\trealit"
    },
    {
      ID: "5feaad420d21a30522c98e3dsad5",
      Titulo: "ejemplo5",
      Cheatsheet: "5feaac630d21a305as22c98e2b",
      Contenido: "Every\tbook\tyou’ve\tever\tread\tperpetuates\ta\tbig\tfat\tlie.\tAnd\tI’m\there\tto\tout\tthepublishing\tindustry’s\tdirty\tlittle\tsecret:\tBooks\tare\tnot\t“by”\tonly\tone\tperson.Yes,\tyou\tsee\tonly\tone\tname\ton\tmany\tbook\tcovers\t(including\tthis\tone),\tbut\tittakes\ta\tteam\tof\tdedicated\tpeople\tto\tpull\toff\tthe\tfinal\tproduct.\tAuthors\tcouldnot\tdo\tit\talone;\tI\tcertainly\tcould\tnot\thave\tdone\tit\talone.\tSo\tI\twant\tto\tthank\tallthose\twho\thelped\tmake\tthis\tnew\tedition\ta\trealit"
    }]

    this.mostrar(notas)
    this.setState({ hoja: i.ID })


    const Json = {
      'ID': i.ID,       
      'Titulo': i.Titulo,
      'Usuario':'',          
  }
  JSON.stringify(Json)
  axios
      .put('http://localhost:8080/addCheat', Json, {
          headers: {
              'token': localStorage.getItem("Session"),
          },
      }).then((e) =>{

          this.mostrar(e.data.CheatSheet)

      } )
      .catch((err) => {        
          console.log(err);
      });
  }

  render() {
    return (
      <div >
        <div className="titulocs" key="trtrt" id="miscs">
          CheatSheets
        </div>
        <div className='listaTit'>
          <div className='separador'>
            {this.state.cheatsheets !== null &&
              this.state.cheatsheets.map((sheet) => (
                <div  key={sheet.ID}>
                  {console.log(sheet)}
                  <div id='tit1' onClick={() => this.cNotas(sheet)} >
                      {this.state.hoja === sheet.ID ? 
                      <div className=' tituloActivo'>
                        {sheet.Titulo}                        
                      </div>                      
                      : 
                      <div>
                        {sheet.Titulo}                        
                      </div> 
                      } 
                  </div>
                </div>
              ))}
        </div>


          <div className='contenidos'>
            {
              this.state.titulos.map((i) => (
                <div key={i.ID}>
                  <div id='tit2' onClick={() => { this.setState({ con: i.ID }) }}>{i.Titulo}</div>
                  <div>
                    {this.state.con === i.ID &&
                      <div id='conten'>{i.Contenido}</div>
                    }
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    );
  }
}
