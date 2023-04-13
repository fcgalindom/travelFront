import axios from 'axios';
import React, { useState, useEffect } from "react";




const Consumirtapi = (props) => {
 
 

    const [datos, setDatos] = useState({});
    const [nuevosdatos, Setnuevosdatos] =useState( {
      nombre: '',
      temperatura: 0,
      humedad:0
      // Otros datos que deseas enviar en la solicitud POST
    });
    
   
    const { ciudad} = props;
    
    const obtenerDatosDeAPI = () => {
      
      console.log("respuesta",ciudad)
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad+',us&APPID=e9223662a011cdede4decbbe8191f1cb')
        .then(response => {
         
          setDatos(response.data );
          
          const datass = {nombre: response.data.name,
            temperatura: response.data.main.temp,
            humedad: response.data.main.humidity}
          crearDatos(datass);
         
        })
        .catch(error => {
          
          console.log(error);

        });
    }
    const crearDatos = async (nuevosDatos) => {
      try {
        // Realizar una solicitud POST a la URL deseada
        const response = await axios.post('http://127.0.0.1:8000/api/crearhistorial', nuevosDatos);
    
        // Manejar la respuesta del servidor
        console.log('Respuesta del servidor:', response.data);
    
        // Puedes hacer algo con la respuesta del servidor aquí, por ejemplo, actualizar el estado de tu componente
        // o realizar alguna otra acción en tu aplicación
    
      } catch (error) {
        // Manejar errores de la solicitud
        console.error('Error al crear datos:', error);
      }
    };

  
  
    useEffect(() => {
      // Llama a la función para obtener los datos de la API cuando el componente se monta y cada vez que ocurre un cambio en el estado
     
      window.addEventListener('change', obtenerDatosDeAPI);
      
    // Devuelve una función de limpieza para desuscribirte del evento cuando el componente se desmonte o cuando el efecto se actualice
    return () => {
      window.removeEventListener('change', obtenerDatosDeAPI);

    };
    }, [ciudad]);
    

    

      
      return (
         
        <div className="container-fluid">
          <table className="table">
        <thead>
          <tr>
  
            <th>Nombre</th>
            <th>Temperatura</th>
            <th>Humedad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
        
            <td>{datos.main && datos.name} </td>
            <td>{datos.main && datos.main.temp}</td>
            <td>{datos.main && datos.main.humidity}</td>
          </tr>
        </tbody>
      </table>   
        </div>
        
      );

  }
export default Consumirtapi;