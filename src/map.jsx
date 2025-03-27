import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 33.5731, 
  lng: -7.5898, 
};

function MapContainer() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD5KS2V-FFglrqWu9Iye70n0rODwQqk8FA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
}
export default MapContainer;