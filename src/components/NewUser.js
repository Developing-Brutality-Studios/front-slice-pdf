import { Component } from 'react'
import axios from 'axios'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 3 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

export default class NewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            formErrors: {
                nombre: '',
                apellido: '',
                email: '',
                password: ''
            }
        }
    }

    onImputChanges = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        
        

        switch (name) {

            case "nombre":

                formErrors.nombre =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;

            case "apellido":

                formErrors.apellido =
                    value.length < 3 ? "minimum 8 characaters required" : "";
                break;

            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
        
    }

     onSubmit = async (e) => {
        e.preventDefault();
        const state = this.state
        let newUser = new FormData();
            newUser.append('Nombre', state.nombre + state.apellido)
            newUser.append('Correo', state.email)
            newUser.append('Foto', "")
            newUser.append('Clave', state.password)
        if (formValid(state)){

            await axios.put('http://localhost:8080/registro',{
                header: {
                    'Content-Length': 1000,
                    'Host': "127.0.0.0.1"
                },
                newUser
            }
                
            ).then((e) =>{
                console.log(e.data)
            })        
        }
        else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
        
    }

    render() {
        const { formErrors } = this.state;
        return (
            <form className="box" onSubmit={this.onSubmit}>
                <h2>Loging</h2>
                <div>
                    <input
                        onChange={this.onImputChanges}
                        type="text" name="nombre"
                        placeholder="Nombre"
                        className={formErrors.nombre.length < 3 ? "error" : null}
                    />
                    {formErrors.nombre.length > 3 && (
                        <p id="emailHelp" className="errorMessage ">{formErrors.nombre}</p>
                    )}
                    
                </div>
                <div>
                    <input 
                        onChange={this.onImputChanges}
                        type="text" name="apellido"
                        placeholder="Apellido"
                        className={formErrors.apellido.length < 3 ? "error" : null} />
                    {formErrors.apellido.length > 3 && (
                        <p id="emailHelp" className="errorMessage ">{formErrors.apellido}</p>
                    )}
                </div>
                <div>
                    <input onChange={this.onImputChanges}
                        type="text" name="email"
                        placeholder="Email"
                        className={formErrors.email.length > 3 ? "error" : null} />
                    {formErrors.email.length > 3 && (
                        <p id="emailHelp" className="errorMessage ">{formErrors.email}</p>
                    )}
                </div>               
                <div>
                    <input onChange={this.onImputChanges}
                        type="password" name="password"
                        placeholder="Password"
                        className={formErrors.password.length > 3 ? "error" : null} />
                    {formErrors.password.length > 3 && (
                        <p id="emailHelp" className="errorMessage ">{formErrors.password}</p>
                    )}
                </div>         

                <button type="submit" value="Login">Loging</button>
            </form>
        )
    }
}