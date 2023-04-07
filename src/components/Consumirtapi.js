import axios from 'axios';
import React from 'react';




class Consumirtapi  extends React.Component {
  constructor(props) {
    super(props);

    // Puedes acceder a las props en el constructor
    console.log(props);
  }
 

    ciudad = "Orlando";
    state = {
      datos: []
    }
    
    componentDidMount() {
       const { ciudad } = this.props;
       console.log(ciudad)
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad+',us&APPID=e9223662a011cdede4decbbe8191f1cb')
        .then(response => {
          this.setState({ datos: response.data });
          console.log(this.state.datos)
        })
        .catch(error => {
          
          console.log(error);

        });
    }


    
    render() {
      
      return (
        <div>
              <p>Name: {this.state.datos.main && this.state.datos.name} </p>
              <p>Temperature: {this.state.datos.main && this.state.datos.main.temp} </p>
              <p>Humeadad: {this.state.datos.main && this.state.datos.main.humidity} </p>
        
            
         
        </div>
      );
    }
  }
export default Consumirtapi;