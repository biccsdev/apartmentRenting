import Image from "next/image";


const MapContainer = ({ coordinates }) => {

    return (
        <div className=" p-5 m-auto">
            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
            <h1 className="w-full text-left font-bold p-5">Ubicacion en el mapa</h1>
            <Image className="rounded p-5"
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.latitude},${coordinates.longitude}&zoom=14&size=400x400&markers=color:red%7C${coordinates.latitude},${coordinates.longitude}&key=${process.env.GOOGLE_MAP_KEY}`} alt="map" height={500} width={500} />
        </div>
    );
};

export default MapContainer;
