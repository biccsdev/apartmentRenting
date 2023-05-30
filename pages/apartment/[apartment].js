import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import NavBar from "../../components/navbar";
import ImagesContainer from "../../components/cityApartments/imagesContainer";
import MapContainer from "../../components/cityApartments/mapContainer";
import BookingContainer from "../../components/cityApartments/bookingContainer";
import { getApartmentById } from "../api/endpoints";
import { useAuthContext } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const depaCaboA = [
    "/apartmentPictures/losCabos/A/highlight.png",
    "/apartmentPictures/losCabos/A/1.png",
    "/apartmentPictures/losCabos/A/2.png",
    "/apartmentPictures/losCabos/A/3.png",
    "/apartmentPictures/losCabos/A/4.png",
    "/apartmentPictures/losCabos/A/5.png",
    "/apartmentPictures/losCabos/A/6.png",
    "/apartmentPictures/losCabos/A/7.png",
    "/apartmentPictures/losCabos/A/8.png",
    "/apartmentPictures/losCabos/A/9.png",
    "/apartmentPictures/losCabos/A/10.png",
    "/apartmentPictures/losCabos/A/11.png",
    "/apartmentPictures/losCabos/A/12.png",
    "/apartmentPictures/losCabos/A/13.png",
    "/apartmentPictures/losCabos/A/14.png",
    "/apartmentPictures/losCabos/A/15.png",
    "/apartmentPictures/losCabos/A/16.png",
    "/apartmentPictures/losCabos/A/17.png",
    "/apartmentPictures/losCabos/A/18.png",
    "/apartmentPictures/losCabos/A/19.png",
    "/apartmentPictures/losCabos/A/20.png",
    "/apartmentPictures/losCabos/A/21.png",
    "/apartmentPictures/losCabos/A/22.png",
    "/apartmentPictures/losCabos/A/23.png",
    "/apartmentPictures/losCabos/A/24.png",
    "/apartmentPictures/losCabos/A/25.png",
    "/apartmentPictures/losCabos/A/26.png",
    "/apartmentPictures/losCabos/A/27.png",
    "/apartmentPictures/losCabos/A/28.png",
    "/apartmentPictures/losCabos/A/28.png",
    "/apartmentPictures/losCabos/A/30.png",
    "/apartmentPictures/losCabos/A/31.png",
    "/apartmentPictures/losCabos/A/32.png",
    "/apartmentPictures/losCabos/A/33.png",
    "/apartmentPictures/losCabos/A/34.png",
    "/apartmentPictures/losCabos/A/35.png",
    "/apartmentPictures/losCabos/A/36.png",
    "/apartmentPictures/losCabos/A/37.png",
    "/apartmentPictures/losCabos/A/38.png",
    "/apartmentPictures/losCabos/A/39.png",
    "/apartmentPictures/losCabos/A/40.png",
    "/apartmentPictures/losCabos/A/41.png",
    "/apartmentPictures/losCabos/A/42.png",
];
const depaCaboB = [
    "/apartmentPictures/losCabos/B/highlight.png",
    "/apartmentPictures/losCabos/B/1.png",
    "/apartmentPictures/losCabos/B/2.png",
    "/apartmentPictures/losCabos/B/3.png",
    "/apartmentPictures/losCabos/B/4.png",
    "/apartmentPictures/losCabos/B/5.png",
    "/apartmentPictures/losCabos/B/6.png",
    "/apartmentPictures/losCabos/B/7.png",
    "/apartmentPictures/losCabos/B/8.png",
    "/apartmentPictures/losCabos/B/9.png",
    "/apartmentPictures/losCabos/B/10.png",
    "/apartmentPictures/losCabos/B/11.png",
    "/apartmentPictures/losCabos/B/12.png",
    "/apartmentPictures/losCabos/B/13.png",
    "/apartmentPictures/losCabos/B/14.png",
    "/apartmentPictures/losCabos/B/15.png",
    "/apartmentPictures/losCabos/B/16.png",
    "/apartmentPictures/losCabos/B/17.png",
    "/apartmentPictures/losCabos/B/18.png",
    "/apartmentPictures/losCabos/B/19.png",
    "/apartmentPictures/losCabos/B/20.png",
    "/apartmentPictures/losCabos/B/21.png",
    "/apartmentPictures/losCabos/B/22.png",
    "/apartmentPictures/losCabos/B/23.png",
    "/apartmentPictures/losCabos/B/24.png",
    "/apartmentPictures/losCabos/B/25.png",
    "/apartmentPictures/losCabos/B/26.png",
    "/apartmentPictures/losCabos/B/27.png",
    "/apartmentPictures/losCabos/B/28.png",
    "/apartmentPictures/losCabos/B/28.png",
    "/apartmentPictures/losCabos/B/30.png",
    "/apartmentPictures/losCabos/B/31.png",
    "/apartmentPictures/losCabos/B/32.png",
    "/apartmentPictures/losCabos/B/33.png",
    "/apartmentPictures/losCabos/B/34.png",
    "/apartmentPictures/losCabos/B/35.png",
    "/apartmentPictures/losCabos/B/36.png",
    "/apartmentPictures/losCabos/B/37.png",
    "/apartmentPictures/losCabos/B/38.png",
    "/apartmentPictures/losCabos/B/39.png",
    "/apartmentPictures/losCabos/B/40.png",
    "/apartmentPictures/losCabos/B/41.png",
];
const depaMazaA = [
    "/apartmentPictures/mazatlan/A/highlight.png",
    "/apartmentPictures/mazatlan/A/1.png",
    "/apartmentPictures/mazatlan/A/2.png",
    "/apartmentPictures/mazatlan/A/3.png",
    "/apartmentPictures/mazatlan/A/4.png",
    "/apartmentPictures/mazatlan/A/5.png",
    "/apartmentPictures/mazatlan/A/6.png",
    "/apartmentPictures/mazatlan/A/7.png",
    "/apartmentPictures/mazatlan/A/8.png",
    "/apartmentPictures/mazatlan/A/9.png",
    "/apartmentPictures/mazatlan/A/10.png",
    "/apartmentPictures/mazatlan/A/11.png",
    "/apartmentPictures/mazatlan/A/12.png",
    "/apartmentPictures/mazatlan/A/13.png",
    "/apartmentPictures/mazatlan/A/14.png",
    "/apartmentPictures/mazatlan/A/15.png",
    "/apartmentPictures/mazatlan/A/16.png",
    "/apartmentPictures/mazatlan/A/17.png",
    "/apartmentPictures/mazatlan/A/18.png",
    "/apartmentPictures/mazatlan/A/19.png",
    "/apartmentPictures/mazatlan/A/20.png",
    "/apartmentPictures/mazatlan/A/21.png",
    "/apartmentPictures/mazatlan/A/22.png",
    "/apartmentPictures/mazatlan/A/23.png",
    "/apartmentPictures/mazatlan/A/24.png",
    "/apartmentPictures/mazatlan/A/25.png",
    "/apartmentPictures/mazatlan/A/26.png",
    "/apartmentPictures/mazatlan/A/27.png",
    "/apartmentPictures/mazatlan/A/28.png",
    "/apartmentPictures/mazatlan/A/28.png",
    "/apartmentPictures/mazatlan/A/30.png",
    "/apartmentPictures/mazatlan/A/31.png",
    "/apartmentPictures/mazatlan/A/32.png",
    "/apartmentPictures/mazatlan/A/33.png",
];
const depaMazaB = [
    "/apartmentPictures/mazatlan/B/highlight.png",
    "/apartmentPictures/mazatlan/B/1.png",
    "/apartmentPictures/mazatlan/B/2.png",
    "/apartmentPictures/mazatlan/B/3.png",
    "/apartmentPictures/mazatlan/B/4.png",
    "/apartmentPictures/mazatlan/B/5.png",
    "/apartmentPictures/mazatlan/B/6.png",
    "/apartmentPictures/mazatlan/B/7.png",
    "/apartmentPictures/mazatlan/B/8.png",
    "/apartmentPictures/mazatlan/B/9.png",
    "/apartmentPictures/mazatlan/B/10.png",
    "/apartmentPictures/mazatlan/B/11.png",
    "/apartmentPictures/mazatlan/B/12.png",
    "/apartmentPictures/mazatlan/B/13.png",
    "/apartmentPictures/mazatlan/B/14.png",
    "/apartmentPictures/mazatlan/B/15.png",
    "/apartmentPictures/mazatlan/B/16.png",
    "/apartmentPictures/mazatlan/B/17.png",
    "/apartmentPictures/mazatlan/B/18.png",
    "/apartmentPictures/mazatlan/B/19.png",
    "/apartmentPictures/mazatlan/B/20.png",
    "/apartmentPictures/mazatlan/B/21.png",
    "/apartmentPictures/mazatlan/B/22.png",
    "/apartmentPictures/mazatlan/B/23.png",
    "/apartmentPictures/mazatlan/B/24.png",
    "/apartmentPictures/mazatlan/B/25.png",
    "/apartmentPictures/mazatlan/B/26.png",
    "/apartmentPictures/mazatlan/B/27.png",
    "/apartmentPictures/mazatlan/B/28.png",
    "/apartmentPictures/mazatlan/B/29.png",
];

export default function Apartment() {
    const [apartmentData, setApartmentData] = useState(null);
    const { user, authenticated, error, register, login, logout, isAdmin } =
        useAuthContext();
    const router = useRouter();
    const data = router.query.apartment;

    useEffect(() => {
        (async () => {
            if (user) {
                const apartment = await getApartmentById(data, user.access_token);
                setApartmentData(apartment);
            }
            if (!authenticated) {
                router.push('/login');
            }
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
            <main className=" w-full h-full bg-slate-200 pt-28 text-slate-800 md:pt-32 md:p-5 xl:p-44">
                {!apartmentData && (
                    <div className="font-bold pt-20 text-center h-screen">
                        <h1>LOADING...</h1>
                    </div>
                )}
                {apartmentData && (
                    <>
                        {(apartmentData.location === "MazatlanA") && (
                            <ImagesContainer images={depaMazaA} />
                        )}
                        {(apartmentData.location === "MazatlanB") && (
                            <ImagesContainer images={depaMazaB} />
                        )}
                        {(apartmentData.location === "LosCabosA") && (
                            <ImagesContainer images={depaCaboA} />
                        )}
                        {(apartmentData.location === "LosCabosB") && (
                            <ImagesContainer images={depaCaboB} />
                        )}
                        <div className="p-5 xl:p-20">
                            <h1 className="w-full text-center font-bold pb-5">
                                {apartmentData.title}
                            </h1>
                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                            {apartmentData.highlights.map((item) => {
                                return (
                                    <article className="p-5">
                                        <h2 className="font-bold">{item.title}</h2>
                                        <h3>{item.description}</h3>
                                    </article>
                                );
                            })}
                        </div>
                        <div className="p-5 xl:p-20">
                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                            <h1 className="w-full text-left font-bold p-5">
                                Acerca de este alojamiento
                            </h1>
                            <p className="p-5 text-justify">{apartmentData.description}</p>
                            <p className="pl-5 pr-5 text-justify">{apartmentData.about}</p>
                        </div>
                        <div className="p-5 xl:p-20">
                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                            <h1 className="w-full text-left font-bold p-5">
                                Comodidades de este alojamiento
                            </h1>
                            {apartmentData.amenities.map((item) => {
                                return (
                                    <article className="p-5 flex">
                                        <li className="p-5">{item}</li>
                                    </article>
                                );
                            })}
                        </div>
                        <MapContainer
                            location={apartmentData.location}
                        />
                        <BookingContainer props={apartmentData} />
                        <div className="p-5 xl:p-20">
                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                            <h1 className="w-full text-left font-bold p-5">Reglamento</h1>
                            <ul className="list-disc p-5">
                                {apartmentData.rules.map((item) => {
                                    return (
                                        <li className="pb-5" key={item}>
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
