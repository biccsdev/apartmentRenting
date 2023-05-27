import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import ApartmentCard from '../components/cityApartments/cityApartmentCard';
import { useAuthContext } from '../hooks/useAuth';
import { getAllApartments } from './api/endpoints';
import { useEffect, useState } from 'react';

const depaCaboA = {
    _id: "fsadihw4k3hrj3",
    title: "Departamento en Los Cabos",
    description: "Increíble condominio muy cerca del centro. Rooftop con asador y alberca donde podrá disfrutar de la hermosa vista.Este condominio tiene todo lo necesario para una estancia confortable. Tendrás las mejores vacaciones aquí",
    thumbnail: "/apartmentPictures/losCabos/A/highlight.png",
    photos: [],
    highlights: [
        {
            title: "Area para trabajo",
            description: "El condominio cuenta con un área cómoda para trabajar, además cuenta con excelente conexión privada a internet."
        },
        {
            title: "Check-In Privado",
            description: "Haz check-in privado utilizando la caja de seguridad"
        },
        {
            title: "Excelente Ubicacion",
            description: "condominio con una gran locación, ubicado a 1 cuadra de la playa."
        },
    ],
    about: "¡Apartamento a estrenar en Torre BNI, ubicado en el corazón de la Zona Dorada! Cerca de plazas comerciales, hospitales, campos de golf y la mejor playa al otro lado de la calle! Hermosas vistas al mar desde la azotea de la torre. Totalmente equipado, con aire acondicionado, lavadora-secadora, cocina completa con todos los utensilios de cocina, wifi rápido, TV de 65 pulgadas y más. Un espacio de estacionamiento, piscina en la azotea y gimnasio. El espacio Cuenta con 2 habitaciones, la principal con cama queen size y baño dentro de la habitación, la segunda tiene 2 camas individuales y baño al salir de la habitación. Acceso de invitado Cuando llegues a la torre habrá un vigilante que ya estará avisado de tu llegada, te dará acceso y de igual forma te apoyará con la entrega de llaves en caso de ser necesario.",
    amenities: [
        {
            url: "",
            description: "3 Camas, 1 Matrimonial y 2 individuales"
        },
        {
            url: "",
            description: "Vista al mar"
        },
        {
            url: "",
            description: "Wifi"
        },
        {
            url: "",
            description: "Cocina Integral"
        },
    ],
    map: "https://goo.gl/maps/VyMW5x4JBtTgrU4XA",
    unAvailableDays: [],
    price: 2500,
    reviews: [{}],
    rules: ["Check-In despues de las 3:00 PM", "Checkout antes de las 12:00 PM", "6 Invitados como maximo"]

}

const depaCaboB = {
    _id: "dlfj4jnkjnt4k",
    title: "Fascinante Departamento en Los Cabos",
    description: "Condo 'Refugio el Paraiso', un lugar hermoso, espacioso y relajante con vistas panoramicas.",
    thumbnail: "/apartmentPictures/losCabos/B/highlight.png",
    photos: [],
    highlights: [
        {
            title: "Area para trabajo",
            description: "El condominio cuenta con un área cómoda para trabajar, además cuenta con excelente conexión privada a internet."
        },
        {
            title: "Check-In Privado",
            description: "Haz check-in privado utilizando la caja de seguridad"
        },
        {
            title: "Excelente Ubicacion",
            description: "condominio con una gran locación, ubicado a 1 cuadra de la playa."
        },
    ],
    about: "¡Apartamento a estrenar en Torre BNI, ubicado en el corazón de la Zona Dorada! Cerca de plazas comerciales, hospitales, campos de golf y la mejor playa al otro lado de la calle! Hermosas vistas al mar desde la azotea de la torre. Totalmente equipado, con aire acondicionado, lavadora-secadora, cocina completa con todos los utensilios de cocina, wifi rápido, TV de 65 pulgadas y más. Un espacio de estacionamiento, piscina en la azotea y gimnasio. El espacio Cuenta con 2 habitaciones, la principal con cama queen size y baño dentro de la habitación, la segunda tiene 2 camas individuales y baño al salir de la habitación. Acceso de invitado Cuando llegues a la torre habrá un vigilante que ya estará avisado de tu llegada, te dará acceso y de igual forma te apoyará con la entrega de llaves en caso de ser necesario.",
    amenities: [
        {
            url: "",
            description: "3 Camas, 1 Matrimonial y 2 individuales"
        },
        {
            url: "",
            description: "Vista al mar"
        },
        {
            url: "",
            description: "Wifi"
        },
        {
            url: "",
            description: "Cocina Integral"
        },
    ],
    map: "https://goo.gl/maps/VyMW5x4JBtTgrU4XA",
    unAvailableDays: [],
    price: 2500,
    reviews: [{}],
    rules: ["Check-In despues de las 3:00 PM", "Checkout antes de las 12:00 PM", "6 Invitados como maximo"]

}

export default function DepasBaja() {
    const [apartmentData, setApartmentData] = useState(null);
    const { user, authenticated, error, register, login, logout, isAdmin } = useAuthContext();
    // (async () => {
    //     const apartments = await getAllApartments(user.access_token);
    //     console.log(apartments);
    //     setApartmentData(apartments);
    // })();

    useEffect(() => {
        (async () => {
            const apartments = await getAllApartments(user.access_token);
            console.log(apartments);
            setApartmentData(apartments);
        })();
    }, []);


    return (
        <div className={styles.container}>
            <Head>
                <title>LosCabos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className=" w-full h-full bg-slate-200">
                {apartmentData.map((item) => {
                    return (
                        <ApartmentCard data={item} />
                    );
                })}
                {/* <ApartmentCard data={depaCaboA} />
                <ApartmentCard data={depaCaboB} /> */}
            </main>
        </div>
    )
}