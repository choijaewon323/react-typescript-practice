import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


export default function MapPage() {
    return <>
        <h2 className="text-6xl text-center mb-10">MAP TEST</h2>

        <div id="map"
            className="h-screen w-full">
            <MapContainer
                className="h-full w-full"
                center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    </>
}