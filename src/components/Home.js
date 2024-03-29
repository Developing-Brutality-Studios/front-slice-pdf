import { useState } from "react";
import axios from "axios";
import Carts from "./Carts";
import Sub from "./Sub";
import "../css/styles-carts.css";
import { Link, Redirect } from "react-router-dom";
import ListCS from "./ListCS";
const Home = () => {
  const [libros, setLibros] = useState([]);
  let status = {};

  if (libros.length === 0 || Object.keys(status) === 0) {
    axios
      .post("https://apibotservice.azurewebsites.net/apiBot/services/AccessApi/getProjects", {
        "idUser":"testUser"
      })
      .then((e) => {
        status = e;
        setLibros(e.data.projects);

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
    console.log("liyesss");
    console.log(libros);
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
          {libros.map((projecto) => (
            <Carts
              key={projecto.idProject}
              title={projecto.projectDesc}
              image={""}
            ></Carts>
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
