import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const EditarSedes = () => {

    const [nombre, setNombre] = useState('');
    const [zona, setZona] = useState('');
    const [direccion, setDireccion] = useState('');
    const [capacidad, setCapacidad] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    // función para actualizar/editar sedes
    const editarSedes = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/sedes/${id}`, {
            nombre: nombre,
            zona: zona,
            direccion: direccion,
            capacidad: capacidad,
            disponibilidad: disponibilidad
        })
        
        const response = await APIInvoke.invokePUT(`/api/sedes/${id}`)
            const idSedes = response._id

            if(idSedes === ''){
                const message = 'Ha sucedido un error al editar la sede';
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
            navigate('/sedes');
            const message = 'La sede ha sido modificada'
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
        getSedesID();
        //eslint-disable-next-line
    }, []);

    const getSedesID = async () => {
        const result = await APIInvoke.invokeGET(`/api/sedes/${id}`)
        setNombre(result.nombre)
        setZona(result.zona)
        setDireccion(result.direccion)
        setCapacidad(result.capacidad)
        setDisponibilidad(result.disponibilidad)
    }

  return (

    <div className="wrapper">
    <NavBar></NavBar>
    <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">
        
            <ContentHeader
            titulo = {'Editar una sede'}
            breadCrumb1 = {'Listado de Sedes'}
            breadCrumb2 = {'Editar'}
            ruta1 = {'/sedes'}
            />

            <section className="content">
                <div className="card">
                    <div className="card-header">
                    <h4 className="card-title text-gray"><i> Modifique los datos necesarios para actualizar la información de la sede</i></h4>
                            <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collpase"> <i className="fas fa-minus"></i>
                            </button> 

                            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove"> <i className="fas fa-times"></i> 
                            </button>
                        </div>
                    </div>

                    <div className="card-body">
                        <form onSubmit={editarSedes}>
                        <h5 className="text-navy"><b><i className="far fa-building"></i> Información de la sede</b></h5>

                        <div className="card elevation-2"> {/* inicio card */}
                        <div className="row"> {/* incio del fila */}

                        <div className="col">
                            <div className="input-group mb-3">
                                <div className="card-body">
                                        <div className="form-group">
                                            <span><strong>Nombre</strong></span>
                                            <br/>
                                            <label htmlFor="nombre"></label>
                                            <input type="text"
                                            id = "nombre"
                                            name = "nombre"
                                            placeholder="20 de julio"
                                            value = {nombre}
                                            onChange = {(e)=> setNombre (e.target.value)}
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
                                            <span><strong>Zona</strong></span>
                                            <br/>
                                            <label htmlFor="zona"></label>
                                            <input type="text"
                                            id = "zona"
                                            name = "zona"
                                            placeholder="Sur"
                                            value = {zona}
                                            onChange = {(e)=> setZona (e.target.value)}
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
                                            placeholder="Carrera 6 #24A-30 Sur"
                                            value = {direccion}
                                            onChange = {(e)=> setDireccion (e.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> {/* fin de la fila */}
                        </div> {/* fin de card */}

                        <h5 className="text-navy"><b><i className="fas fa-info-circle"></i> Detalles de la sede</b></h5>
                            <div className="card elevation-2"> {/* inicio card */}
                            <div className="row"> {/* incio del fila */}

                            <div className="col">
                            <div className="input-group mb-3">
                                <div className="card-body">
                                        <div className="form-group">
                                            <span><strong>Capacidad</strong></span>
                                            <br/>
                                            <label htmlFor="capacidad"></label>
                                            <input type="number"
                                            id = "capacidad"
                                            name = "capacidad"
                                            placeholder="150"
                                            value = {capacidad}
                                            onChange = {(e)=> setCapacidad (e.target.value)}
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
                                            <span><strong>Disponibilidad</strong></span>
                                            <br/>
                                            <label htmlFor="disponibilidad"></label>
                                            <input type="boolean"
                                            id = "disponibilidad"
                                            name = "disponibilidad"
                                            placeholder="true"
                                            value = {disponibilidad}
                                            onChange = {(e)=> setDisponibilidad (e.target.value)}
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

export default EditarSedes