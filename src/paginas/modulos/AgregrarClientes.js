import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const AgregarClientes = () => {
    const navigate = useNavigate();
    
    const [clientes, setClientes] = useState({
        nombres: '',
        apellido: '',
        cedula: '',
        correo: '',
        telefono: '',
        direccion: ''
    })

    const { nombres, apellido, cedula, correo, telefono, direccion } = clientes

    useEffect(() => {
        // carga del formulario + foco en campo de email
        document.getElementById('nombres').focus();
    }, [])

       // creación de la función onChange
       const onChange = (e) => {
        setClientes({
            ...clientes,
            [e.target.name]: e.target.value
        });
    }

    const CrearClientes = async () => {
        const data = {
            nombres: clientes.nombres,
            apellido: clientes.apellido,
            cedula: clientes.cedula,
            correo: clientes.correo,
            telefono: clientes.telefono,
            direccion: clientes.direccion
        }

        const response = await APIInvoke.invokePOST('/api/clientes', data);
        const idClientes = response._id;

        if(idClientes === ''){
            const message = 'Ha sucedido un error al agregar al cliente';
            swal ({
                title: 'Error',
                text: message,
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

            navigate('/clientes');
            const message = 'El cliente ha sido agregado'
            swal ({
                title: 'Información',
                text: message,
                icon: 'success',
                buttons: {
                    confirm: {
                    text: 'OK',
                    value: true,
                    visible: true,
                    className: 'btn btn-primary',
                    closeModal: true
                    }
                }
            }); 
            setClientes({
                nombres: '',
                apellido: '',
                cedula: '',
                correo: '',
                telefono: '',
                direccion: ''
            });
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        CrearClientes();
    }

  return (

    <div className="wrapper">
        <NavBar></NavBar>
        <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
            
                <ContentHeader
                titulo = {'Agregar un cliente'}
                breadCrumb1 = {'Listado de Clientes'}
                breadCrumb2 = {'Agregar'}
                ruta1 = {'/clientes/agregar'}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title text-gray"><i> Ingrese los siguientes datos para crear un nuevo cliente </i></h4>
                                <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove"> <i className="fas fa-minus"></i>
                                </button> 

                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse"> <i className="fas fa-times"></i> 
                                </button>
                            </div>
                        </div>
                        
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <h5 className="text-navy"><b><i className="far fa-user-circle"></i> Información personal</b></h5>

                            <div className="card elevation-2"> {/* inicio card */}
                                <div className="row"> {/* incio del fila */}
                                
                                    {/* campos para nombre, apellidos y cedula */}
                                    <div className="col">
                                            <div className="input-group mb-3">
                                            <div className="card-body">
                                                    <div className="form-group">
                                                        <span><strong>Nombres</strong></span>
                                                        <br/>
                                                        <label htmlFor="nombres"></label>
                                                            <input type="text"
                                                            id = "nombres"
                                                            name = "nombres"
                                                            placeholder="Juan"
                                                            value = {nombres}
                                                            onChange = {onChange}
                                                            required
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    <div className="col">
                                            <div className="input-group mb-3">
                                                <div className="card-body">
                                                    <div className="form-group">
                                                    <span><strong> Apellidos </strong></span>
                                                        <br/>
                                                        <label htmlFor="apellido"></label>
                                                            <input type="text"
                                                            id = "apellido"
                                                            name = "apellido"
                                                            placeholder="Rodríguez"
                                                            value = {apellido}
                                                            onChange = {onChange}
                                                            required
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    <div className="col">
                                            <div className="input-group mb-3">
                                                <div className="card-body">
                                                    <div className="form-group">
                                                    <span><strong> Cédula </strong></span>
                                                        <br/>
                                                        <label htmlFor="cedula"></label>
                                                            <input type="number"
                                                            id = "cedula"
                                                            name = "cedula"
                                                            placeholder="C.C"
                                                            value = {cedula}
                                                            onChange = {onChange}
                                                            required
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        </div> {/* final del fila */}
                                        </div> {/* final card */}

                            {/* campos de correo, telefono y dirección*/}
                                <h5 className="text-navy"><b><i className="fas fa-info-circle"></i> Información de contacto</b></h5>

                                <div className="card elevation-2"> {/* inicio card */}
                                <div className="row"> {/* inicio de fila */}

                                <div className="col">
                                            <div className="input-group mb-3">
                                                <div className="card-body">
                                                    <div className="form-group">
                                                    <span><strong> Correo </strong></span>
                                                        <br/>
                                                        <label htmlFor="correo"></label>
                                                            <input type="email"
                                                            id = "correo"
                                                            name = "correo"
                                                            placeholder="Correo electrónico"
                                                            value = {correo}
                                                            onChange = {onChange}
                                                            required
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div className="col">
                                            <div className="input-group mb-3">
                                                <div className="card-body">
                                                    <div className="form-group">
                                                    <span><strong> Teléfono </strong></span>
                                                        <br/>
                                                        <label htmlFor="telefono"></label>
                                                            <input type="number"
                                                            id = "telefono"
                                                            name = "telefono"
                                                            placeholder="Teléfono"
                                                            value = {telefono}
                                                            onChange = {onChange}
                                                            required
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="input-group mb-3">
                                                <div className="card-body">
                                                    <div className="form-group">
                                                    <span><strong> Dirección de residencia </strong></span>
                                                        <br/>
                                                        <label htmlFor="direccion"></label>
                                                            <input type="text"
                                                            id = "direccion"
                                                            name = "direccion"
                                                            placeholder="Dirección"
                                                            value = {direccion}
                                                            onChange = {onChange}
                                                            required
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div> {/* final del fila */}
                                    </div> {/* final de card */}

                                    <div className="card-footer bg-white">
                                        <button type="submit" className="btn btn-success btn-lg"> 
                                        <strong> <i className="far fa-plus-square"/> Agregar </strong>
                                        </button>

                                    </div>

                                </form>
                        </div>
                    </div>
                </section>
            </div>
        <Footer></Footer>
    </div>
  )
}

export default AgregarClientes