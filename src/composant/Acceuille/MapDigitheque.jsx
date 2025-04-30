import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapDigitheque = () => {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[-21.46651888490075, 47.11454236646774]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={[-21.46651888490075, 47.11454236646774]}>
          <Popup>Digitheque se trouve ici</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapDigitheque;
