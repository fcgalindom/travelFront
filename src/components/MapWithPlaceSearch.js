import React, { Component  , useState} from 'react';
import { GoogleMap, LoadScript, Marker } from 'google-maps-react';

const PlaceSearch = ({ onSelectPlace }) => {
  const [selectedPlace, setSelectedPlace] = useState("");

  // Manejar cambios en el select
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPlace(selectedValue);
    onSelectPlace(selectedValue);
  };

  // Opciones predefinidas de lugares
  const places = [
    { value: "lugar1", label: "Lugar 1" },
    { value: "lugar2", label: "Lugar 2" },
    { value: "lugar3", label: "Lugar 3" }
  ];

  return (
    <select value={selectedPlace} onChange={handleChange}>
      <option value="">Seleccionar lugar</option>
      {places.map((place) => (
        <option key={place.value} value={place.value}>
          {place.label}
        </option>
      ))}
    </select>
  );
};
const MapWithPlaceSearch = () => {
  const [selectedPlace, setSelectedPlace] = useState("");

  // Manejar selección de lugar
  const handleSelectPlace = (place) => {
    setSelectedPlace(place);
  };

  return (
    <LoadScript googleMapsApiKey="TU_API_KEY">
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMap
          center={{ lat: -34.61, lng: -58.38 }}
          zoom={10}
        >
          {selectedPlace && (
            <Marker
              position={{ lat: -34.61, lng: -58.38 }}
              label={selectedPlace}
            />
          )}
        </GoogleMap>
      </div>
      <PlaceSearch onSelectPlace={handleSelectPlace} />
    </LoadScript>
  );
};
export  default  MapWithPlaceSearch;