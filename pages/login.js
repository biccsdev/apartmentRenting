import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useAuthContext } from '../hooks/useAuth';

export default function Login() {
    const { user, authenticated, error, register, login, isAdmin } = useAuthContext();
    const router = useRouter();

    const handleRegister = (event) => {
        event.preventDefault();
        const { name, email, password, confirmPassword, phone } = event.target.elements;

        if (password.value !== confirmPassword.value) {
            alert('Claves no coinciden, verifica e intenta de nuevo.')
            return;
        }

        const userData = {
            name: name.value,
            password: password.value,
            repeatPassword: confirmPassword.value,
            email: email.value,
            phoneNumber: phone.value
        };

        const res = register(userData);
        if (res) {
            alert('Usuario Registrado correctamente!, Inicie Sesion.');
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const { emailLogin, passwordLogin } = event.target.elements;

        const credentials = {
            email: emailLogin.value,
            password: passwordLogin.value,
        };
        const res = login(credentials).then((result) => {
            if (result) {
                alert('Ha Iniciado Sesion Correctamente!');
                router.push('/');
            }
            if (result === undefined) {
                alert('Datos incorrectos, intente denuevo.')
            }
        });

    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className=" w-full h-fit pt-20 bg-slate-200">
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Crea una cuenta</h1>
                    <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Nombre</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="text" id="name" name="name" placeholder="Juan Sanchez" required={true}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Correo</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="email" id="email" name="email" placeholder="usuario@ejemplo.com" required={true}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Telefono</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="text" id="phone" name="phone" placeholder="526681334394" required={true}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Clave</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="password" id="password" name="password" placeholder="********" required={true}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirmar Clave</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="password" id="confirmPassword" name="confirmPassword" placeholder="********" required={true}></input>
                        </div>
                        <button
                            className="bg-orange-400 w-full hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow"
                            type="submit">Registrarse</button>
                    </form>
                </div>
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Inicia Sesion</h1>
                    <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Correo</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="email" id="emailLogin" name="emailLogin" placeholder="usuario@ejemplo.com" required={true}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Clave</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="password" id="passwordLogin" name="passwordLogin" placeholder="********" required={true}></input>
                        </div>
                        <button
                            className="w-full bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow"
                            type="submit">Login</button>
                    </form>
                </div>
            </main>

        </div>
    )
}