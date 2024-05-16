import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarClientes = () => {
    const [clientes, setClientes] = useState([])

    const getClientes = async () => {
        const response = await APIInvoke.invokeGET('/api/clientes');
        setClientes(response.clientes);
    }

    useEffect(() => {
        getClientes();
    }, [])

    const eliminarClientes = async (e, idCliente) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/clientes/${idCliente}`);

        if(response.msg === 'El cliente ha sido eliminado exitosamente'){
            const msg = 'El cliente ha sido eliminado correctamente'
            swal ({
                title: 'Informacion',
                text: msg,
                icon:'success',
                buttons:{
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }

                }
            });
            getClientes();

        } else {

            const msg = 'El cliente no fue eliminado correctamente'
            swal ({
                title: 'Error',
                text: msg,
                icon:'error',
                buttons:{
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }

                }
            });

        }

    }

  return (
    <div className="wrapper">
        <NavBar></NavBar>
        <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
            
                <ContentHeader
                titulo = {'Listado de clientes'}
                breadCrumb1 = {'Inicio'}
                breadCrumb2 = {'Clientes'}
                ruta1 = {'/home'}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/clientes/agregar"} className="btn btn-block btn-success"><i className="far fa-plus-square"></i><b> Agregar</b> un cliente</Link></h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove"> <i className="fas fa-minus"></i>
                                </button> 

                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse"> <i className="fas fa-times"></i> 
                                </button>

                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove"><i className="fas fa-items"></i>
                                </button>
                            </div>
                        </div>
                            <div className="card-body table-responsive">
                                <table className="table table-sm table-bordered table-hover">
                                    <thead className="table-light bg-teal"> 
                                        <tr>
                                            <th style={{width: '15%'}}>{'Nombre'}</th>
                                            <th style={{width: '15%'}}>{'Apellido'}</th>
                                            <th style={{width: '10%'}}>{'Cedula'}</th>
                                            <th style={{width: '20%'}}>{'Correo'}</th>
                                            <th style={{width: '15%'}}>{'Telefono'}</th>
                                            <th style={{width: '15%'}}>{'Dirección'}</th>
                                            <th style={{width: '10%'}}>{'Acciones'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clientes.map((cliente, index)=>(
                                            <tr key={index}>
                                                <td className="align-middle">{cliente.nombres}</td>
                                                <td className="align-middle">{cliente.apellido}</td>
                                                <td className="align-middle">{cliente.cedula}</td>
                                                <td className="align-middle">{cliente.correo}</td>
                                                <td className="align-middle">{cliente.telefono}</td>
                                                <td className="align-middle">{cliente.direccion}</td>
                                                <td className="align-middle"><Link to={`/clientes/editar/${cliente._id}`} className="btn btn-sm btn-outline-secondary"><i className="far fa-edit"></i> {'Editar'}</Link>
                                                <button onClick={(e) => eliminarClientes(e, cliente._id)} className="btn btn-sm btn-warning"><i className="far fa-trash-alt"></i> {'Eliminar'}</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </section>
            </div>
        <Footer></Footer>
    </div>  
  )
}

export default MostrarClientes
