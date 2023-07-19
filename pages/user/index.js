import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useAuthContext } from "../../hooks/useAuth";
import NavBar from "../../components/navbar";
import { getAllUserBookings } from "../api/endpoints";

export default function ProfileComponent() {
    const { user, authenticated, error } = useAuthContext();
    const [showCode, setShowCode] = useState(false);
    const [activeBooking, setActiveBooking] = useState(null);
    const [pastBooking, setPastBooking] = useState(null);
    const [pendingBooking, setPendingBooking] = useState(null);
    const currentDate = new Date();

    useEffect(() => {
        (async () => {
            if (user) {
                const past = [];
                const pending = [];
                const active = [];
                const bookings = await getAllUserBookings({ userId: user.user._id }, user.access_token);
                bookings.map((item) => {


                    if (leaveDate < currentDate) {
                        console.log('past')

                        past.push(item);
                    }
                    if (item.status === 'PENDING' || ((item.status === 'ACCEPTED') && (arriveDate > currentDate))) {
                        console.log('pending')
                        pending.push(item)
                    }
                    if (item.status === 'ACCEPTED' && ((leaveDate > currentDate) && (arriveDate <= currentDate))) {
                        console.log('accepted')
                        active.push(item)
                    }
                    console.log('*********************')

                })
                if (active[0]) {
                    setActiveBooking(active);
                }
                if (past[0]) {
                    setPastBooking(past);
                }
                if (pending[0]) {
                    setPendingBooking(pending);

                }
            }
        })()
    }, []);

    const handleShowCode = () => {
        setShowCode(!showCode);
    };

    if (!authenticated) {
        return (
            <div>
                <NavBar></NavBar>
                <h1>
                    Acceso restringido, porfavor Inicia Sesion para acceder a tu Perfil.
                </h1>
            </div>
        );
    }

    if (authenticated) {
        return (
            <div className="bg-slate-200">
                <NavBar></NavBar>
                <div className="max-w-md mx-auto bg-slate-200 rounded p-5 shadow text-slate-800 pt-28 h-fit">
                    <h1 className="text-2xl font-bold mb-4 pl-5">Perfil</h1>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>

                    <div className="mb-6 p-5">
                        <h1 className="text-xl font-bold mb-2">Nombre Completo</h1>
                        <h1 className="text-gray-600">{user.user.name}</h1>
                    </div>

                    <div className="mb-6 pl-5">
                        <h1 className="text-xl font-bold mb-2">Correo</h1>
                        <h1 className="text-gray-600">{user.user.email}</h1>
                    </div>

                    <div className="mb-6 p-5">
                        <h1 className="text-xl font-bold mb-2">Teléfono</h1>
                        <h1 className="text-gray-600">+{user.user.phoneNumber}</h1>
                    </div>

                    <div className="mb-6">
                        <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                        <h1 className="text-xl font-bold mb-2 p-5">Rentas Activas</h1>
                        {!activeBooking && (
                            <div className=" bg-gray-100 rounded p-5">
                                <h1 className="text-center font-bold text-lg">No tienes rentas activas</h1>
                            </div>
                        )}
                        {activeBooking && (
                            activeBooking.map((item) => {
                                return (
                                    <div className=" bg-gray-100 rounded p-5">
                                        <h1 className="text-lg font-bold mb-2">Clave Caja de Llaves</h1>
                                        <p className="text-gray-600 mb-4">Accede a las llaves de la puerta principal</p>
                                        <p className="text-gray-600 font-bold mb-4">{item.apartment.title}</p>
                                        <h3 className="text-gray-600 ">{new Date(item.arriveDate).toLocaleDateString()} - {new Date(item.leaveDate).toLocaleDateString()}</h3>
                                        {showCode ? (
                                            <p className="text-2xl font-bold">{item.apartment.keyBoxPassword}</p>
                                        ) : (
                                            <p className="text-2xl font-bold">####</p>
                                        )}
                                        <button
                                            className="mt-2 bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow"
                                            onClick={handleShowCode}
                                        >
                                            Show Code
                                        </button>
                                    </div>
                                )
                            })
                        )}
                    </div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="p-5">
                        <h1 className="text-xl font-bold mb-2 pb-5">Rentas Pendientes</h1>
                        {!pendingBooking && (
                            <div className=" bg-gray-100 rounded p-5">
                                <h1 className="text-center font-bold text-lg">No tienes rentas pendientes</h1>
                            </div>
                        )}
                        {pendingBooking && (
                            pendingBooking.map((item) => {
                                return (<>
                                    <div className="p-4 bg-gray-100 rounded text-left">
                                        <h1 className="text-lg font-bold mb-2">{item.apartment.title}</h1>
                                        <h2 className="text-lg font-bold mb-2">{item.status}</h2>
                                        <h3 className="text-gray-600 ">{new Date(item.arriveDate).toLocaleDateString()} - {new Date(item.leaveDate).toLocaleDateString()}</h3>
                                    </div>
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>

                                </>)
                            })
                        )}
                    </div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="p-5">
                        <h1 className="text-xl font-bold mb-2 pb-5">Rentas Pasadas</h1>
                        {!pastBooking && (
                            <div className=" bg-gray-100 rounded p-5">
                                <h1 className="text-center font-bold text-lg">No tienes rentas pasadas</h1>
                            </div>
                        )}
                        {pastBooking && (
                            pastBooking.map((item) => {
                                return (<>
                                    <div className="p-4 bg-gray-100 rounded text-left">
                                        <h1 className="text-lg font-bold mb-2">{item.apartment.title}</h1>
                                        <h3 className="text-gray-600 ">{new Date(item.arriveDate).toLocaleDateString()} - {new Date(item.leaveDate).toLocaleDateString()}</h3>
                                    </div>
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>

                                </>)
                            })
                        )}
                    </div>
                </div></div>
        );
    }

}
