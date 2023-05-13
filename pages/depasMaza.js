import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import ApartmentCard from '../components/cityApartments/cityApartmentCard';

export default function DepasMaza() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mazatlán</title>
                <meta name="description" content="Descubre las departamentos en renta para quedarte en Mazatlán, Sinaloa." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className=" w-full h-full bg-slate-200">
                <ApartmentCard />
                <ApartmentCard />
            </main>
        </div>
    )
}