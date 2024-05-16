// importación de dependencias y librerías
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// importación de otros archivos
import APIInvoke from '../../configuracion/APIInvoke'
import swal from 'sweetalert'



// creacion de la función para login
const Login = () => {
    const navigate = useNavigate();

    // definición del estado inicial del componente
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    // constante para recibir información
    const {email,password} = usuario;

    // creación de la función onChange
    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        // carga del formulario + foco en campo de email
        document.getElementById('email').focus();
    }, [])

    const IniciarSesion = async () => {
        if(password.length < 8){
            const msg = 'La contraseña debe tener al menos 8 carácteres';
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-warning',
                        closeModal: true
                    }
                }
            });

        } else {
            const data = {
                email: usuario.email,
                password: usuario.password,
            }

            const response = await APIInvoke.invokePOST('/api/auth', data);
            const message =  response.msg;

            if(message === 'Usuario no registrado' || message === 'Contraseña incorrecta'){
                const msg = 'No es posible iniciar sesión, revise su correo y contraseña';
                swal({
                    title: 'Error',
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: 'OK',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
        } else {
            // aquí se obtiene el token de acceso
            const jwt = response.token;
            // se almacena el token en el localstorgae
            localStorage.setItem('token', jwt)

            // despues del login, se ingresa a la página
            navigate('/home');
        }
    }
}

    const onSubmit = (e) => {
        e.preventDefault();
        IniciarSesion();
    }

  return (

    <div className='hold-transition login-page'>
        <div className="login-box">
             <div className="login-logo">
                <Link to={'#'}><p className='text-navy'><b>Iniciar </b> sesión</p></Link>
            </div>

      <div className="card">
            <div className="card-body login-card-body">
                <p className="login-box-msg"> Ingrese sus datos para iniciar</p>
            
            {/*Inicio del formulario */}
            <form onSubmit={onSubmit}>

                {/*Para campo de email */}
                <div className="input-group mb-3">
                <input
                    type = "email"
                    className = "form-control"
                    placeholder = "Correo electrónico"
                    id = "email"
                    name = "email"
                    value = {email}
                    onChange = {onChange}
                    required
                />

                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-envelope" />
                    </div>
                </div>
                </div>

                {/*Para campo de contraseña */}
                <div className="input-group mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña" 
                    id = "password"
                    name = "password"
                    value = {password}
                    onChange = {onChange}
                    required 
                />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-lock" />
                    </div>
                </div>
            </div>

             {/*Para botones de ingreso y registro*/}
             <div className='social-auth-links text-center mb-3'>
                <button type="submit" className="btn btn-block btn-light bg-teal"> Ingresar </button>
                <Link to={"/Registro"} className="btn btn-block btn-light bg-navy"> Registro </Link>
            </div>

          </form>
           
          
                </div>
          </div>
    </div>
</div>

  )
}

export default Login