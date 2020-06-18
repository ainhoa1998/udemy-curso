import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ConditionalSection from "./sections/conditional";
import cars from "./data/cars.json";

/*function Hello(props) {
  return <h2>{props.title}</h2>;
} */

//const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

class Text extends Component {
  render() {
    const { arrayOfNumbers, objectWithInfo, multiply, title } = this.props;

    const mapped = arrayOfNumbers.map(multiply);

    return (
      <div>
        {title}
        <p>{mapped.join(", ")}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    );
  }
}

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: this.props.contadorInicial,
    };
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000);
  }
  render() {
    return <ContadorNumero numero={this.state.contador} />;
  }
}

Contador.defaultProps = { contadorInicial: 5 };

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>;
  }
}

class CarItem extends Component {
  render() {
    return cars.map((car) => {
      return (
        <li key={car.id}>
          <p>
            <strong>Nombre:</strong> {car.name}
          </p>
          <p>
            <strong>Marca:</strong> {car.company}
          </p>
        </li>
      );
    });
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      mouseX: 0,
      mouseY: 0,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleClick(e) {
    alert("Hi, here!");
  }

  handleMouseMove(e) {
    const { clienteX, clienteY } = e;
    this.setState({
      mouseX: clienteX,
      mouseY: clienteY,
    });
  }

  render() {
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi there!</button>
        <div
          onMouseMove={this.handleMouseMove}
          style={{ border: "1px solid #000", marginTop: 10, padding: 10 }}
        >
          <p>
            {this.state.mouseX},{this.state.mouseY}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
