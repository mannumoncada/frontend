import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/auth/Login';
import Registro from './paginas/auth/Registro';
import Home from './Home'
import MostrarClientes from './paginas/modulos/MostrarClientes'
import AgregarClientes  from './paginas/modulos/AgregrarClientes'
import EditarClientes from './paginas/modulos/EditarClientes';
import MostrarSedes from './paginas/modulos/MostrarSedes';
import AgregarSedes from './paginas/modulos/AgregarSedes';
import EditarSedes from './paginas/modulos/EditarSedes';

function App() {
  return (
    <div className="App">
    <Fragment>
      <Router>
        <Routes>

          <Route path='/' exact element= {<Login/>}></Route>
          <Route path='/registro' exact element= {<Registro/>}></Route>
          <Route path='/home' exact element= {<Home/>}></Route>
          <Route path='/clientes' exact element= {<MostrarClientes/>}></Route>
          <Route path='/clientes/agregar' exact element= {<AgregarClientes/>}></Route>
          <Route path= '/clientes/editar/:id' exact element={<EditarClientes/>}></Route>
          <Route path='/sedes' exact element= {<MostrarSedes/>}></Route>
          <Route path='/sedes/agregar' exact element= {<AgregarSedes/>}></Route>
          <Route path='/sedes/editar/:id' exact element= {<EditarSedes/>}></Route>

        </Routes>
      </Router>
    </Fragment>
  </div>
);
}

export default App;
