import useAuth from "../../hooks/useAuth";
import { useAuthContext } from "../../hooks/useAuth";
import NavBar from "../../components/navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllApartments, getAllBookings, getFileById, reviewBooking } from "../api/endpoints";
import Link from "next/link";
import Modal from "react-modal";
import Image from "next/image";

export default function Admin() {
    const { user, authenticated, error } = useAuthContext();
    const [departments, setDepartments] = useState(null);
    const [pendingBookings, setPendingBookings] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    if (!authenticated || !user) {
        router.push("/login");
    }

    useEffect(() => {
        (async () => {
            const bkHelp = [];
            const deps = await getAllApartments(user.access_token);
            const books = await getAllBookings(user.access_token);
            setDepartments(deps);
            books.map((item) => {
                if (item.status === "PENDING") {
                    bkHelp.push(item);
                }
            });
            if (bkHelp[0]) {
                setPendingBookings(bkHelp);
            }
        })();
    }, []);

    const handleReview = async (id, status) => {
        const review = await reviewBooking(id, status, user.access_token);
        alert(`Se actualizo el estatus a ${status}  exitosamente!`)
        router.push('/admin')
    }

    const handlePaymentProof = async (item) => {
        const response = await getFileById(item.paymentProof, user.access_token);
        const bufferData = response.data.data;
        const base64String = Buffer.from(bufferData).toString("base64");
        setSelectedImage(`data:${response.contentType};base64,${base64String}`);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    if (user) {
        if (user.user.role !== "ADMIN") {
            return (
                <div>
                    <h1>Acceso restringido.</h1>
                </div>
            );
        }
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="h-max bg-slate-200">
                <div className="max-w-md mx-auto  rounded p-5  text-slate-800 pt-28 h-fit">
                    <h1 className="text-2xl font-bold mb-4 pl-5">
                        Panel de Administrador
                    </h1>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                </div>
                <div className="max-w-md mx-auto rounded p-5 text-slate-800 h-fit">
                    <h2 className="text-2xl font-bold mb-4 pl-5">Departamentos</h2>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    {departments &&
                        departments.map((item) => {
                            return (
                                <div className="m-5 p-5 bg-slate-300 rounded text-center flex">
                                    <h1 className="font-bold p-2">{item.title}</h1>
                                    <Link
                                        href={`/admin/detalles/${item._id}`}
                                        className="bg-orange-400 block m-auto w-fit mt-2 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow"
                                    >Detalles</Link>
                                </div>
                            );
                        })}
                </div>
                <div className="max-w-md mx-auto  rounded p-5  text-slate-800">
                    <h2 className="text-2xl font-bold mb-4 pl-5">
                        Pendientes por Aprobar
                    </h2>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    {!pendingBookings && (
                        <div>
                            <h1 className="text-xl font-bold mb-4 pl-5">
                                No tienes rentas pendientes por aprobar.
                            </h1>
                        </div>
                    )}
                    {pendingBookings &&
                        pendingBookings.map((item) => {
                            return (
                                <div className="m-5 p-5 bg-slate-300 rounded text-center">
                                    <h1 className="font-bold">{item.apartment.title}</h1>
                                    <h2>{item.user.name}</h2>
                                    <h2>
                                        {item.arriveDate.slice(0, 10)} -{" "}
                                        {item.leaveDate.slice(0, 10)}
                                    </h2>
                                    <h3>${item.totalCost} MXN</h3>
                                    {selectedImage && (
                                        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="w-fit pt-56 block m-auto">
                                            <img className="h-96 w-96" src={selectedImage} alt="Payment Proof" />
                                            <button className="bg-orange-400 w-fit mt-2 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" onClick={closeModal}>Cerrar</button>
                                        </Modal>
                                    )}
                                    <button onClick={() => handlePaymentProof(item)} className="mt-2 block m-auto bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow">
                                        Ver comprobante de pago
                                    </button>
                                    <div className="flex mt-2">
                                        <button onClick={() => handleReview(item._id, "ACCEPTED")} className="bg-orange-400 block m-auto hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow">
                                            Aprobar
                                        </button>
                                        <button onClick={() => handleReview(item._id, "DENIED")} className="bg-orange-400 block m-auto hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow">
                                            Denegar
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
