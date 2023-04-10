import axios from 'axios';
import React, { useState, useEffect } from "react";




const Consumirtapi = (props) => {
 
 

    const [datos, setDatos] = useState({});
    
   
    const { ciudad} = props;
    console.log("ciudad",ciudad)
    const obtenerDatosDeAPI = () => {
      
      console.log("respuesta",ciudad)
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad+',us&APPID=e9223662a011cdede4decbbe8191f1cb')
        .then(response => {
         
          setDatos(response.data );
          console.log("data",datos)
        })
        .catch(error => {
          
          console.log(error);

        });
    }

  
  
    useEffect(() => {
      // Llama a la función para obtener los datos de la API cuando el componente se monta y cada vez que ocurre un cambio en el estado
     
      window.addEventListener('change', obtenerDatosDeAPI);

    // Devuelve una función de limpieza para desuscribirte del evento cuando el componente se desmonte o cuando el efecto se actualice
    return () => {
      window.removeEventListener('change', obtenerDatosDeAPI);
    };
    }, [ciudad]);


    

      
      return (
        <div>
              <p>Name: {datos.main && datos.name} </p>
              <p>Temperature: {datos.main && datos.main.temp} </p>
              <p>Humeadad: {datos.main && datos.main.humidity} </p>
        
            
         
        </div>
      );

  }
export default Consumirtapi;