import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper , Marker } from 'google-maps-react';
import axios from 'axios';


const MapContainer = (props) => {

  const [datos, setDatos] = useState({coord:{lon: -74.006, lat: 40.7143}});
    
   
    const { ciudad} = props;
   
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
  console.log("entro",datos.coord.lat)
  const markerPosition = {
    lat: datos.coord.lat,
    lng: datos.coord.lon
  };

  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <Map
      google={props.google}
      zoom={11}
      style={mapStyles}
      center={{
        lat: datos.coord.lat,
        lng: datos.coord.lon
      }}
    >
      <Marker
        position={markerPosition}
      />
    </Map>
  );
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDW1i79_hM1aiDesGHfQ8AxVFHCz3Rork8'
})(MapContainer);