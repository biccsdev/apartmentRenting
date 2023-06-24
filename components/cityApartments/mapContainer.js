import Image from "next/image";

// import mapCaboA from 'public/apartmentPictures/losCabos/A/mapCaboA.jpg';
// import mapCaboB from 'public/apartmentPictures/losCabos/A/mapCaboB.jpg';
// import mapMazaA from 'public/apartmentPictures/mazatlan/A/ubiMazaA.jpg';
// import mapMazaB from 'public/apartmentPictures/mazatlan/A/ubiMazaB.jpg';


const MapContainer = ({ location }) => {

    if (location === "MazatlanA") {
        return (
            <div className=" p-5 lg:p-0 m-auto flex flex-wrap justify-center text-2xl">
                <div className="w-4/5 m-auto h-px bg-gray-500 lg:hidden"></div>
                <h1 className="w-full text-left lg:text-center font-bold p-5">Ubicacion en el mapa</h1>
                <a href="https://goo.gl/maps/RPTWzFPets1jGm4N6?coh=178573&entry=tt" target="_blank" className="hover:scale-105">
                    <Image src={'/apartmentPictures/mazatlan/A/ubiMazaA.jpg'} href='map picture' height={500} width={500}></Image>
                </a>
            </div>
        );
    }

    if (location === "MazatlanB") {
        return (
            <div className=" p-5 lg:p-0 m-auto flex flex-wrap justify-center text-2xl">
                <div className="w-4/5 m-auto h-px bg-gray-500 lg:hidden"></div>
                <h1 className="w-full text-left lg:text-center font-bold p-5">Ubicacion en el mapa</h1>
                <a href="https://goo.gl/maps/8wWh3mET5v2VrFQs8" target="_blank" className="hover:scale-105">
                    <Image src={'/apartmentPictures/mazatlan/B/ubiMazaB.jpg'} href='map picture' height={500} width={500}></Image>
                </a>
            </div>
        );
    }

    if (location === "LosCabosA") {
        return (
            <div className=" p-5 lg:p-0 m-auto flex flex-wrap justify-center text-2xl">
                <div className="w-4/5 m-auto h-px bg-gray-500 lg:hidden"></div>
                <h1 className="w-full text-left lg:text-center font-bold p-5">Ubicacion en el mapa</h1>
                <a href="https://goo.gl/maps/oQe5o7gwyLU4ySgQA?coh=178573&entry=tt" target="_blank" className="hover:scale-105">
                    <Image src={'/apartmentPictures/losCabos/A/mapCaboA.jpg'} href='map picture' height={500} width={500}></Image>
                </a>
            </div>
        );
    }

    if (location === "LosCabosB") {
        return (
            <div className=" p-5 lg:p-0 m-auto flex flex-wrap justify-center text-2xl ">
                <div className="w-4/5 m-auto h-px bg-gray-500 lg:hidden"></div>
                <h1 className="w-full text-left lg:text-center font-bold p-5">Ubicacion en el mapa</h1>
                <a href="https://goo.gl/maps/dVRk9dpJzn3C8uXP9" target="_blank" className="hover:scale-105">
                    <Image src={'/apartmentPictures/losCabos/B/mapCaboB.jpg'} href='map picture' height={500} width={500}></Image>
                </a>
            </div>
        );
    }


};

export default MapContainer;
