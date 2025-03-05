import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Offices() {
  const officeLocations = [
    {
      name: "Riderside, CA",
      coords: [34.0522, -118.2437] as [number, number],
      address: "Riderside, CA",
    },
    {
      name: "Houston, Texas",
      coords: [29.7604, -95.3698] as [number, number],
      address: "Houston, Texas",
    },
    {
      name: "Fremont, CA",
      coords: [37.5483, -121.9886] as [number, number],
      address: "Fremont, CA",
    },
  ];

  const blackIcon = new L.Icon({
    iconUrl: "marker.png",
    iconSize: [14, 22],
    iconAnchor: [10, 32],
    popupAnchor: [1, -32],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [20, 20],
  });

  return (
    <section
      id="offices"
      className="flex flex-col md:flex-row w-full h-full px-10 justify-center items-center gap-10 mt-0 z-10"
    >
      <div className="w-full md:w-[50%]">
        <MapContainer
          center={[19.076, 72.8777]}
          zoom={1}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {officeLocations.map((office, index) => {
            console.log(office);
            return (
              <Marker key={index} position={office.coords} icon={blackIcon}>
                <Popup>{office.address}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      <div className="w-full md:w-[50%] flex flex-col items-center gap-4">
        <h1 className="font-dmserifdisplay text-black text-4xl md:text-6xl font-semibold mb-10">
          Locations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {officeLocations.map((office, index) => (
            <div
              key={index}
              className="bg-neutral-200 p-6 rounded-lg shadow-lg text-center"
            >
              <h2 className="text-lg font-bold text-black">{office.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
