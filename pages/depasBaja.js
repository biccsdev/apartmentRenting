import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import ApartmentCard from '../components/cityApartments/cityApartmentCard';
import { useAuthContext } from '../hooks/useAuth';
import { getAllApartments } from './api/endpoints';
import { useEffect, useState } from 'react';


export default function DepasBaja() {
    const [apartmentData, setApartmentData] = useState([]);
    const { user, authenticated, error, register, login, logout, isAdmin } = useAuthContext();

    useEffect(() => {
        (async () => {
            const apartments = await getAllApartments(user.access_token);
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
            <main className=" w-full h-fit bg-slate-200">
                {apartmentData.map((item, index) => {
                    if (index > 1) {
                        return;
                    }
                    return (
                        <ApartmentCard data={item} />
                    );
                })}
            </main>
        </div>
    )
}