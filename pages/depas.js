import Head from 'next/head'
import Image from 'next/image'
import ApartmentCard from '../components/cityApartments/cityApartmentCard';
import { useAuthContext } from '../hooks/useAuth';
import { getAllApartmentsUnlocked } from './api/endpoints';
import { useEffect, useState } from 'react';
import loading from '../public/loading.gif'



export default function Depas() {
    const [apartmentData, setApartmentData] = useState([]);
    const { user, authenticated, error, register, login, logout, isAdmin } = useAuthContext();

    useEffect(() => {
        (async () => {
            try {
                const apartments = await getAllApartmentsUnlocked();
                if (Array.isArray(apartments)) {
                    setApartmentData(apartments);
                } else {
                    console.error("Empty or undefined response from getAllApartmentsUnlocked");
                }
            } catch (error) {
                console.error("Error fetching apartments:", error);
            }
        })();
    }, []);


    return (
        <div className="bg-slate-200 h-screen w-full">
            <Head>
                <title>Departamentos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="block m-auto md:flex md:pt-24  bg-slate-200">
                <div className='md:w-full md:flex md:justify-center md:flex-wrap'>
                    {apartmentData.length > 0 ? (
                        apartmentData.map((item) => (
                            <ApartmentCard data={item} key={item._id} />
                        ))
                    ) : (
                        <div className='w-full flex justify-center mt-10'>
                            <Image src={loading} alt='loading gif' />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}