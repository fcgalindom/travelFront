
import './App.css';
import MapContainer  from '../src/components/Consumirclima'
import Menu  from './components/Menu';
function App() {
  return (
    <div className="App"  style={{ width: '100vw', height: '100vh' }}>
      <Menu/>
      
      <MapContainer />
     
    </div>
  );
}

export default App;
