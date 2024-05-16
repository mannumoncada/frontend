import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarSedes = () => {
    // definiendo useState
    const [sedes, SetSedes] = useState([])

    // función para llamar a todas las sedes
    const getSedes = async () => {
        const response = await APIInvoke.invokeGET('/api/sedes');
        SetSedes(response.sedes);
    }

    // definiendo useEffect
    useEffect(() => {
        getSedes();
    }, [])

    // función para eliminar una sede
    const eliminarSede = async (e, idSede) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/sedes/${idSede}`);

        if(response.msg === 'La sede ha sido eliminada'){
            const msg = 'La sede ha sido eliminada correctamente'
            swal({
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
            getSedes();

        } else {

            const msg = 'La sede no fue eliminada correctamente'
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
                titulo = {'Listado de sedes'}
                breadCrumb1 = {'Inicio'}
                breadCrumb2 = {'Sedes'}
                ruta1 = {'/home'}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/sedes/agregar"} className="btn btn-block btn-success"><i className="far fa-plus-square"></i><b> Agregar</b> una sede</Link></h3>
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
                                            <th style={{width: '25%'}}>{'Nombre'}</th>
                                            <th style={{width: '10%'}}>{'Zona'}</th>
                                            <th style={{width: '20%'}}>{'Dirección'}</th>
                                            <th style={{width: '5%'}}>{'Capacidad'}</th>
                                            <th style={{width: '15%'}}>{'Disponibilidad'}</th>
                                            <th style={{width:'15%'}}>{'Acciones'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sedes.map((sede, index)=>(
                                            <tr key={index}>
                                                <td className="align-middle">{sede.nombre}</td>
                                                <td className="align-middle">{sede.zona}</td>
                                                <td className="align-middle">{sede.direccion}</td>
                                                <td className="align-middle">{sede.capacidad}</td>
                                                <td className="align-middle">{sede.disponibilidad.toString()}</td>
                                                <td className="align-middle"><Link to={`/sedes/editar/${sede._id}`} className="btn btn-sm btn-outline-secondary"><i className="far fa-edit"></i> {'Editar'}</Link>
                                                <button onClick={(e) => eliminarSede(e, sede._id)} className="btn btn-sm btn-warning"><i className="far fa-trash-alt"></i> {'Eliminar'}</button></td>
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

export default MostrarSedes