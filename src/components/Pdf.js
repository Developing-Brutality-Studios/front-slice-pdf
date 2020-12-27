import { useState } from "react";
import { Page } from "react-pdf";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import React, { Component } from "react";
import "../css/styles-pdf.css";
import { useParams } from "react-router-dom";
import { Lector, NewSheet } from './HojaTrucos';


const HojaTrucos = async () => {
  const hoja = await Lector()
  return hoja
}
const NewS = async () => {
  NewSheet()
}

/*const Modal = () => {
  var botton = false
  return !botton
}*/
const MyApp = (props) => {

  var base = "http://localhost:8080/file/";
  var params = useParams();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [text, setText] = useState("");
  const [bot,setBot] = useState('display: none;')
  const [hojaTrucos, setHojaT] = useState(HojaTrucos())
  const selectT = document.querySelectorAll(".selectect-text");

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
             <div>
                <div className="modal" style={bot}>
                  <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                    <botton onClick={setBot('display: none;')}  >salir</botton>
                  </div>
               </div>
            </div>
            <button onClick={setBot('display: absolute;')}>
              Guardar
            </button >
            <button onClick={NewS}>
              nueva
            </button>
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
