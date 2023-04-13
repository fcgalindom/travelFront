
import './App.css';
import MapContainer  from '../src/components/Consumirclima'
import SelectComponent  from './components/Busqueda';
import React, { useState ,useEffect } from 'react';
import Consumirtapi from './components/Consumirtapi';
import axios from 'axios';
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  const nuevaUbicacion = { lat: 40.7128, lng: -74.0060 };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("prueba", selectedValue)
   
  };
  

  const options = [
    
    { value: 'Orlando', label: 'Orlando' },
    { value: 'New York', label: 'New York' },
    { value: 'Miami', label: 'Miami' }
  ];
  
  return (
    <div className="App"  style={{ width: '100vw', height: '100vh' }}>

      <h1>{selectedValue}</h1>
      <Consumirtapi ciudad={selectedValue}/>
       <SelectComponent options={options} onChange={handleSelectChange} />
      <MapContainer ciudad={selectedValue} />
     
    </div>
  );
}

export default App;
