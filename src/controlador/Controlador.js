import MapContainer  from '../components/Consumirclima'
import SelectComponent  from '../components/Busqueda';
import React, { useState  } from 'react';
import Consumirtapi from '../components/Consumirtapi';

function Controlador() {
    const [selectedValue, setSelectedValue] = useState('');
  

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
    <div >
      <Consumirtapi ciudad={selectedValue}/>
      <br></br>
      <b className='f-3'>Seleciona una ciudad</b>
       <SelectComponent options={options} onChange={handleSelectChange} />
       <br></br>
       
      <MapContainer ciudad={selectedValue} />
     
    </div>
  );


}
export default Controlador;