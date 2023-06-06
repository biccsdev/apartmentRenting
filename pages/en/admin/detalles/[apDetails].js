import { useAuthContext } from "../../../../hooks/useAuth";
import { useRouter } from "next/router";
import NavBar from "../../components/navbar";
import { useEffect, useState } from "react";
import { getApartmentById, getAllBookings, getFileById, findReviewByApartmentId, deleteReview } from "../../api/endpoints";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";


export default function Details() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [apartmentData, setApartmentData] = useState(null);
    const [booking, setBookings] = useState(null);
    const [reviews, setReviews] = useState(false);
    const { user, authenticated, error, register, login, logout, isAdmin } = useAuthContext();
    const router = useRouter();
    const data = router.query.apDetails;

    useEffect(() => {
        (async () => {
            if (user) {
                const bkHelp = [];
                const apartment = await getApartmentById(data, user.access_token);
                const books = await getAllBookings(user.access_token);
                setApartmentData(apartment);
                books.map((item) => {
                    if ((item.apartment._id === apartment._id) && item.status === "ACCEPTED") {
                        bkHelp.push(item);
                    }
                });
                if (bkHelp[0]) {
                    setBookings(bkHelp);
                }
                const reviews = await findReviewByApartmentId(apartment._id, user.access_token);
                if (reviews.length > 0) {
                    setReviews(reviews);
                }
            }
            if (!authenticated) {
                router.push('/en/login');
            }
        })();
    }, []);

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

    const handleDelete = async (id) => {
        const deletion = await deleteReview(id, user.access_token);
        if (deletion) {
            alert('Successfully deleted the comment!')
        }
        setReviews(reviews => {
            return reviews.filter(item => item._id !== id);
        });
    }

    if (apartmentData) {
        return (
            <>
                <NavBar></NavBar>
                <div className="pt-28 bg-slate-200 h-max text-slate-700 xl:p-32">
                    <h1 className="font-bold p-5">{apartmentData.title}</h1>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="p-5">
                        <h1 className=" pb-5 text-center">Click to see availability calendar</h1>
                        <DatePicker
                            selectsRange
                            excludeDates={apartmentData.unAvailableDays.map((date) => new Date(date))}
                            filterDate={(date) => date >= new Date()}
                            className=" p-5 block m-auto rounded w-1/2 text-slate-900 bg-slate-300"
                        />
                    </div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="bg-slate-200 flex flex-wrap justify-center">
                        <h1 className="font-bold p-5 w-full">Reviews</h1>
                        {reviews && (
                            reviews.map((item) => {
                                return (
                                    <div className="pb-5 bg-slate-300 m-2 p-5 rounded" key={item}>
                                        <h1 className="font-bold">{item.creator}</h1>
                                        <h1>{item.comment}</h1>
                                        <h1 className="font-bold">{new Date(item.createdAt).toISOString().split("T")[0]}</h1>
                                        <button onClick={() => handleDelete(item._id)} className="w-full bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold p-1 border border-orange-700 rounded shadow">Delete</button>
                                    </div>
                                );
                            })
                        )}
                        {!reviews && (
                            <div>
                                <h1 className="w-full text-center font-bold p-5">No reviews at the moment</h1>
                            </div>
                        )}
                    </div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="bg-slate-200 flex flex-wrap justify-center">
                        <h1 className="font-bold p-5 w-full">Booking History</h1>
                        {booking && (booking.map((item) => {
                            return (
                                <div className="m-5 p-5 bg-slate-300 rounded text-center xl:w-1/2">
                                    <h1>{item.apartment.title}</h1>
                                    <h2>{item.user.name}</h2>
                                    <h2>{item.user.phoneNumber}</h2>
                                    <h2>
                                        {item.arriveDate.slice(0, 10)} -{" "}
                                        {item.leaveDate.slice(0, 10)}
                                    </h2>
                                    <h3>${item.totalCost} MXN</h3>
                                    {selectedImage && (
                                        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="w-fit pt-56 block m-auto">
                                            <img className="h-96 w-96" src={selectedImage} alt="Payment Proof" />
                                            <button className="bg-orange-400 w-fit mt-2 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" onClick={closeModal}>Close</button>
                                        </Modal>
                                    )}
                                    <button onClick={() => handlePaymentProof(item)} className="mt-2 block m-auto bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow">
                                        See payment proof
                                    </button>
                                </div>
                            )
                        }))}
                        {!booking && (
                            <div className="h-screen">
                                <h1 className="font-bold p-5 text-center">No past bookings</h1>
                            </div>
                        )}
                    </div>

                </div>
            </>
        )
    }
}