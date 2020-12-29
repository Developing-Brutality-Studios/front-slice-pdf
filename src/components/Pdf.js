import { useState } from "react";
import { Page } from "react-pdf";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import React, { Component } from "react";
import "../css/styles-pdf.css";
import { useParams } from "react-router-dom";
import { NuevoTruco, Lector, NewSheet } from './HojaTrucos';
import axios from 'axios';


const NewS = (i) => {
  console.log(NewSheet(i))
}

const MyApp = (e) => {

  var base = "http://localhost:8080/file/";
  var params = useParams();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [text, setText] = useState("");
  const [bot, setbot] = useState(false)
  const [arr, setArr] = useState([1])
  const [nue, setNew] = useState(false)
  const [tit, setit] = useState('')
  const [hojaTrucos, setHojaT] = useState('')
  const selectT = document.querySelectorAll(".selectect-text");
  const Changed = e => setit(e.target.value)

  selectT.forEach((elem) => {
    elem.addEventListener("mouseup", sText);
  });

  function sText(event) {
    const selectT = window.getSelection().toString().trim();
    setText(selectT);
  }

  function onItemClick({ pageNumber: itemPageNumber }) {
    setPageNumber(itemPageNumber);
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  const Radio = (i,) => {
    return (
      <div >
        <input type="radio" name='hojas' id={i.ID} value={i.ID} onClick={() => setHojaT(i.ID)} />
        <label htmlFor={i.ID}>{i.Titulo}</label>
      </div>
    )
  }

  const nTruco = () => {
    var obj = {
      'cheatsheet': hojaTrucos,
      'contenido': text
    }
    axios
      .post('http://localhost:8080/addCheat', obj, {
        headers: {
          token: localStorage.getItem("Session"),
        }
      }).then((e) => {
        console.log(e.data)
      })
  }
  let n = false
  return (
    <>
      <div className="grid">
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
          <div>
            <div>{text}</div>
            <div>{bot &&
              <div className="modal" >
                <div className="modal-content">
                  <form>
                    <div>
                      {arr.map((i) => Radio(i))}
                    </div>
                    <div>{n &&
                      <input onChange={Changed} type="text" name="Hoja" placeholder="Nombre nueva hoja " />
                    }
                    </div>
                    <input type='submit' onClick={() => { n = true }}></input>
                  </form>
                  <button onClick={() => setbot(false)}>salir</button>
                  {text.length > 5 && hojaTrucos.length > 10 &&
                    <button onClick={nTruco}>  Guardar truco  </button >
                  }

                </div>
              </div>
            }
            </div>
            <button onClick={async () => { setArr(await Lector()); setbot(true) }} >
              Guardar
            </button >
          </div>
        </div>
        <div className="selectect-text">
          <Document
            file={base.concat('SDLGameDevelopment.pdf')}
            onLoadSuccess={onDocumentLoadSuccess}
            onItemClick={onItemClick}
            className="document selectect-text"
          >
            <Page pageNumber={pageNumber} className="hoja  selectect-text" />
          </Document>
        </div>
      </div>
    </>
  );
};

export default class Pdf extends Component {
  render() {
    return (
      <div>
        <div className="hojas">
          <MyApp />
        </div>
      </div>
    );
  }
}
