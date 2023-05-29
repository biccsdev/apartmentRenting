import Link from 'next/link';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useAuthContext } from '../hooks/useAuth';


function NavBar() {
    const { user, authenticated, error, register, login, isAdmin } = useAuthContext();
    var role = null;
    if (user) {
        role = user.user.role;
    }

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
                {!user && (
                    <Link className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" href="/login">
                        Login
                    </Link>
                )}
                {(role === "CLIENT") && (
                    <Link className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" href={`/user`}>Perfil</Link>
                )}
                {(role === "ADMIN") && (
                    <Link className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" href={`/admin`}>Perfil</Link>
                )}
            </div>
        </nav>
    );
}

export default NavBar;

