import 'tailwindcss/tailwind.css';
import Head from 'next/head'
import NavBar from '../components/navbar';
import styles from '../styles/Home.module.css';

export default function Unauthorized() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unauthorized</title>
        <meta name="description" content="Descubre las departamentos en renta para quedarte en Mazatlán, Sinaloa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className=" w-full h-screen bg-slate-200 pt-40 text-center font-bold text-slate-800">
        <h1>UNAUTHORIZED</h1>
        <h2>You can't access this page.</h2>
      </main>
    </div>
  )
}

