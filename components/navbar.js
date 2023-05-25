import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
    const [logged, setLogged] = useState(null);
    const [userId, setUserId] = useState(null);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-100 z-10 fixed w-full">
            <div className="flex items-center flex-shrink-0 text-white">
                <Link href='/'>
                    <img className="h-24" src="/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="flex items-center p-4">
                {!logged && (
                    <Link className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" href="/login">
                        Login
                    </Link>
                )}
                {logged && (
                    <Link className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" href={`/user/${userId}`}>Perfil</Link>
                )}
            </div>
        </nav>
    );
}

export default NavBar;

