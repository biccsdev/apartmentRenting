import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../../hooks/useAuth';


function NavBar() {
    const { user, authenticated, error, register, login, logout, isAdmin } = useAuthContext();
    const router = useRouter();
    var role = null;
    if (user) {
        role = user.user.role;
    }

    const [logged, setLogged] = useState(null);
    const [userId, setUserId] = useState(null);

    const handleLogout = () => {
        logout()
        router.push('/login')
    }


    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-100 z-10 fixed w-full">
            <div className="flex items-center flex-shrink-0 text-white">
                <Link href='/en'>
                    <img className="h-24" src="/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="flex items-center p-4">
                {!user && (
                    <Link className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" href="/en/login">
                        Login
                    </Link>
                )}
                {(role === "CLIENT" && router.pathname !== "/user") && (
                    <Link className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" href={`/en/user`}>Profile</Link>
                )}
                {(role === "ADMIN" && router.pathname !== "/admin") && (
                    <Link className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" href={`/en/admin`}>Profile</Link>
                )}
                {(role === "CLIENT" && router.pathname === "/user") && (
                    <button className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" onClick={handleLogout}>Logout</button>
                )}
                {(role === "ADMIN" && router.pathname === "/admin") && (
                    <button className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" onClick={handleLogout}>Logout</button>
                )}
            </div>
        </nav>
    );
}

export default NavBar;

