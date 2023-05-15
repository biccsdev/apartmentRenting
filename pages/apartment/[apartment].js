import { useRouter } from "next/router";

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

export default function Apartment() {
    const router = useRouter();
    const data = router.query.apartment;
    console.log(data)
}