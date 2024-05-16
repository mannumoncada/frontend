import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const AgregarSedes = () => {
    const navigate = useNavigate();

    const [sedes, setSedes] = useState({
        nombre: '',
        zona: '',
        direccion: '',
        capacidad: '',
        disponibilidad: ''
    })

    const {nombre, zona, direccion, capacidad, disponibilidad} = sedes

    useEffect(() => {
        document.getElementById('nombre').focus();
    }, [])

    const onChange = (e) => {
        setSedes({
            ...sedes,
            [e.target.name]: e.target.value
        });

    }

    const CrearClientes = async () => {
        const data = {
            nombre: sedes.nombre,
            zona: sedes.zona,
            direccion: sedes.direccion,
            capacidad: sedes.capacidad,
            disponibilidad: sedes.disponibilidad
        }

        const response = await APIInvoke.invokePOST('/api/sedes', data);
        const IdSedes = response._id;

        if(IdSedes === ''){
            const message = 'Ha sucedido un error al agregar la sede'
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
            const message = 'La sede ha sido agregada'
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
            setSedes({
                nombre: '',
                zona: '',
                direccion: '',
                capacidad: '',
                disponibilidad: ''
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
                titulo = {'Agregar una sede'}
                breadCrumb1 = {'Listado de Sedes'}
                breadCrumb2 = {'Agregar'}
                ruta1 = {'/sedes/agregar'}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                        <h4 className="card-title text-gray"><i> Ingrese los siguientes datos para agregar una nueva sede </i></h4>
                                <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove"> <i className="fas fa-items"></i>
                                </button> 

                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse"> <i className="fas fa-times"></i> 
                                </button>
                            </div>
                        </div>

                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                            <h5 className="text-navy"><b><i className="far fa-building"></i> Información de la sede</b></h5>

                            <div className="card elevation-2"> {/* inicio card */}
                                <div className="row"> {/* incio del fila */}

                                {/* campos para nombre, apellidos y cedula */}
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
                                                        <span><strong>Zona</strong></span>
                                                        <br/>
                                                        <label htmlFor="zona"></label>
                                                            <input type="text"
                                                            id = "zona"
                                                            name = "zona"
                                                            placeholder="Sur"
                                                            value = {zona}
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
                                                    <span><strong> Dirección </strong></span>
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

                                        </div>
                                        </div>

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
                                                        <span><strong>Disponibilidad</strong></span>
                                                            <br/>
                                                                <label htmlFor="disponibilidad"></label>
                                                                    <input type="boolean"
                                                                    id = "disponibilidad"
                                                                    name = "disponibilidad"
                                                                    placeholder="true"
                                                                    value = {disponibilidad}
                                                                    onChange = {onChange}
                                                                    required
                                                                    />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                        </div>
                                        </div>

                                <div className="card-footer bg-white">
                                    <button type="submit" className="btn btn-success btn-lg"> 
                                    <strong><i className="far fa-plus-square"/> Agregar </strong>
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

export default AgregarSedes