import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const EditarClientes = () => {

        // se definen variables para cada campo + useState
        const [nombres, setNombres] = useState('');
        const [apellido, setApellido] = useState('');
        const [cedula, setCedula] = useState('');
        const [correo, setCorreo] = useState('');
        const [telefono, setTelefono] = useState('');
        const [direccion, setDireccion] = useState('');
        const navigate = useNavigate();
        const { id } = useParams();
        
        // función para actualizar/editar clientes
        const editarClientes = async (e) => {
            e.preventDefault();
            await APIInvoke.invokePUT(`/api/clientes/${id}`, {
                nombres:nombres,
                apellido:apellido,
                cedula:cedula,
                correo:correo,
                telefono: telefono,
                direccion: direccion
            })

            const response = await APIInvoke.invokePUT(`/api/clientes/${id}`)
            const idClientes = response._id

            if(idClientes === ''){
                const message = 'Ha sucedido un error al editar el cliente';
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
            const message = 'El cliente ha sido editado'
            swal ({
                title: 'Informacion',
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

            }
        }
    
        useEffect(() => {
            getClientesID();
            //eslint-disable-next-line
        }, []);
    
        const getClientesID = async () => {
            const result = await APIInvoke.invokeGET(`/api/clientes/${id}`);
            setNombres(result.nombres)
            setApellido(result.apellido)
            setCedula(result.cedula)
            setCorreo(result.correo)
            setTelefono(result.telefono)
            setDireccion(result.direccion)
    
        }

        

  return (
    
    <div className="wrapper">
        <NavBar></NavBar>
        <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
            
                <ContentHeader
                titulo = {'Editar un cliente'}
                breadCrumb1 = {'Listado de Clientes'}
                breadCrumb2 = {'Editar'}
                ruta1 = {'/clientes'}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                        <h4 className="card-title text-gray"><i> Modifique los datos necesarios para actualizar la información del cliente </i></h4>
                                <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collpase"> <i className="fas fa-minus"></i>
                                </button> 

                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove"> <i className="fas fa-times"></i> 
                                </button>
                            </div>
                        </div>

                        <div className="card-body">
                            <form onSubmit={editarClientes}>
                            <h5 className="text-navy"><b><i className="far fa-user-circle"></i> Información personal</b></h5>

                                <div className="card elevation-2"> {/* incio del card */}
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
                                                        onChange = {(e)=> setNombres (e.target.value)}
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
                                                        <span><strong>Apellido</strong></span>
                                                        <br/>
                                                        <label htmlFor="apellido"></label>
                                                        <input type="text"
                                                        id = "apellido"
                                                        name = "apellido"
                                                        placeholder="Rodríguez"
                                                        value = {apellido}
                                                        onChange = {(e)=> setApellido (e.target.value)}
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
                                                        <span><strong>Cédula</strong></span>
                                                        <br/>
                                                        <label htmlFor="cedula"></label>
                                                        <input type="number"
                                                        id = "cedula"
                                                        name = "cedula"
                                                        placeholder="C.C"
                                                        value = {cedula}
                                                        onChange = {(e)=> setCedula (e.target.value)}
                                                        required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* campos de correo, telefono y dirección*/}
                                <h5 className="text-navy"><b><i className="fas fa-info-circle"></i> Información de contacto</b></h5>

                                <div className="card elevation-2">{/* inicio card */}
                                <div className="row"> {/* inicio de fila */}

                                <div className="col">
                                            <div className="input-group mb-3">
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <span><strong>Correo</strong></span>
                                                        <br/>
                                                        <label htmlFor="correo"></label>
                                                        <input type="email"
                                                        id = "correo"
                                                        name = "correo"
                                                        placeholder="Correo electrónico"
                                                        value = {correo}
                                                        onChange = {(e)=> setCorreo (e.target.value)}
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
                                                        <span><strong>Teléfono</strong></span>
                                                        <br/>
                                                        <label htmlFor="telefono"></label>
                                                        <input type="number"
                                                        id = "telefono"
                                                        name = "telefono"
                                                        placeholder="Teléfono"
                                                        value = {telefono}
                                                        onChange = {(e)=> setTelefono (e.target.value)}
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
                                                        <span><strong>Dirección</strong></span>
                                                        <br/>
                                                        <label htmlFor="direccion"></label>
                                                        <input type="text"
                                                        id = "direccion"
                                                        name = "direccion"
                                                        placeholder="Dirección"
                                                        value = {direccion}
                                                        onChange = {(e)=> setDireccion (e.target.value)}
                                                        required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                </div> 
                                </div> 

                                <div className="card-footer bg-white">
                                    <button type="submit" className="btn btn-warning btn-lg"> 
                                    <strong><i className="far fa-edit"/> Editar </strong>
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

export default EditarClientes