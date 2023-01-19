import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./componentes/buscador";
import MiApi from "./componentes/miApi";
import { useState } from 'react';




function App() {
  const [valorBusqueda, setValorBusqueda] = useState('');
  
  return (
    <div className="App">
      <Buscador setValorBusqueda={setValorBusqueda}></Buscador>
      <MiApi 
      valorBusqueda={valorBusqueda}></MiApi>
    </div>
  );
};

export default App;
