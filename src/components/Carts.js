import { Component } from "react";

export default class Carts extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <div className="contenido-card">
          <h3>{this.props.title}</h3>
          <p>{this.props.parrafo}</p>
          <a href={"/pdf/" + this.props.title}>Leer Màs</a>
        </div>
      </div>
    );
  }
}
