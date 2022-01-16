
import { Component } from "react";
import axios from 'axios';

export default class Carts extends Component {


  render() {
    return (
      <div className="card">
        <div>
          
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <div className="contenido-card">
          <h3>{this.props.title}</h3>
          <a href={"/pdf/" + this.props.title}>Leer Más</a>
        </div>
      </div>
    );
  }
}
