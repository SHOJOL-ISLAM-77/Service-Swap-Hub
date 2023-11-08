import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const MapComponent = () => {
  const position = [23.8103, 90.4125]; // Latitude and Longitude for Dhaka
  const polygonCoords = [
    [23.8103, 90.4125], // Start repeating the coordinates
    [23.8107, 90.4127],
    [23.8105, 90.4130],
    [23.8100, 90.4130], // End repeating the coordinates
  ];

  const markerPosition = [23.811, 90.412]; // Latitude and Longitude for the marker

  return (
    
    <MapContainer
      center={position}
      zoom={12}
      style={{ height: "600px", width: "100%" }}
      scrollWheelZoom={false}
    >
       
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon pathOptions={{ color: 'blue' }} positions={[polygonCoords]} />
      <Marker position={markerPosition}>
        <Popup>
          Here our head office!<br />
          You can visit.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
