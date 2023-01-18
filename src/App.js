import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./componentes/buscador";
import MiApi from "./componentes/miApi";
import { useState } from 'react';
import Paginacion from './componentes/paginacion';

function App() {
  const [valorBusqueda, setValorBusqueda] = useState('');
  
  return (
    <div className="App">
      <Buscador setValorBusqueda={setValorBusqueda}></Buscador>
      <MiApi 
      valorBusqueda={valorBusqueda}></MiApi>
      <Paginacion></Paginacion>
     
      
    </div>
  );
};

export default App;
