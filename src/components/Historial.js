import React, { useEffect, useState } from 'react';
import axios from 'axios';





function Historial() {
  const [datos, setDatos] = useState([]);
  const llamardatos = async () => {

    try {
      // Realizar una solicitud POST a la URL deseada
      const response = await axios.get('http://127.0.0.1:8000/api/historial');

      // Manejar la respuesta del servidor
      setDatos(response.data);
      console.log("prueba",datos)


      // Puedes hacer algo con la respuesta del servidor aquí, por ejemplo, actualizar el estado de tu componente
      // o realizar alguna otra acción en tu aplicación

    } catch (error) {
      // Manejar errores de la solicitud
      console.error('Error al crear datos:', error);
    }
  };
  useEffect(() => {
    llamardatos();
    console.log(datos)

  }, []);


  return (

    <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Temperatura (°C)</th>
            <th>Humedad (%)</th>
            <th>Fecha de creación</th>
          </tr>
        </thead>
        <tbody>
          {datos.map(ubicacion => (
            <tr key={ubicacion.id}>
              <td>{ubicacion.id}</td>
              <td>{ubicacion.nombre}</td>
              <td>{ubicacion.temperatura}</td>
              <td>{ubicacion.humedad}</td>
              <td>{ubicacion.created_at}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    
 
  );
}

export default Historial;