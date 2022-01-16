import { useState } from "react";
import axios from "axios";
import Carts from "./Carts";
import Sub from "./Sub";
import "../css/styles-carts.css";
import { Redirect } from "react-router-dom";

const Home = () => {
  const [libros, setLibros] = useState([]);
  let status = {};

  if (libros.length === 0 || Object.keys(status) === 0) {
    axios
      .get("http://localhost:8080/inicio", {
        headers: {
          token: localStorage.getItem("Session"),
        },
      })
      .then((e) => {
        status = e;
        setLibros(e.data.libros);
        console.log(e.data.libros)
        if (libros == null) {
          setLibros([]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (
    localStorage.getItem("Session") != null &&
    Date.now() - localStorage.getItem("lastlogin") < 86400000
  ) {    
    return (
      <div className="homecontainer">        
        <div className="container-card">
          <Sub
            title="Agregar Libro"
            image="http://localhost:8080/images/Plus_symbol.png"
            onsub={() => {
              setLibros([]);
            }}
          ></Sub>
          {libros.map((libro) => (
            <Carts
              key={libro.ID}
              title={libro.Archivo}
              image={libro.Imagen}
            > 
            </Carts>
          ))}
        </div>
        <br />
        <br />
      </div>
    );
  } else {
    localStorage.removeItem("Session");
    return <Redirect to="/" />;
  }
};

export default Home;
