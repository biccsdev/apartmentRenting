import Image from "next/image";


const MapContainer = ({ coordinates }) => {

    return (
        <div className=" p-5 m-auto">
            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
            <h1 className="w-full text-left font-bold p-5">Ubicacion en el mapa</h1>
            <Image src={'https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=AIzaSyDTUfY6B45mMLzf28UeB5FZhXaqP35_Xa4&signature=Yj7X7hQLkaFa51afUVkE1A-j9A8='} alt="map" height={500} width={500} />
        </div>
    );
};

export default MapContainer;
