import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createBooking } from "../../pages/api/endpoints";
import { useAuthContext } from "../../hooks/useAuth";


const depaCaboA = [
    "/apartmentPictures/losCabos/A/highlight.png",
    "/apartmentPictures/losCabos/A/1.png",
    "/apartmentPictures/losCabos/A/2.png",
    "/apartmentPictures/losCabos/A/3.png",
    "/apartmentPictures/losCabos/A/4.png",
    "/apartmentPictures/losCabos/A/5.png",
    "/apartmentPictures/losCabos/A/6.png",
    "/apartmentPictures/losCabos/A/7.png",
    "/apartmentPictures/losCabos/A/8.png",
    "/apartmentPictures/losCabos/A/9.png",
    "/apartmentPictures/losCabos/A/10.png",
    "/apartmentPictures/losCabos/A/11.png",
    "/apartmentPictures/losCabos/A/12.png",
    "/apartmentPictures/losCabos/A/13.png",
    "/apartmentPictures/losCabos/A/14.png",
    "/apartmentPictures/losCabos/A/15.png",
    "/apartmentPictures/losCabos/A/16.png",
    "/apartmentPictures/losCabos/A/17.png",
    "/apartmentPictures/losCabos/A/18.png",
    "/apartmentPictures/losCabos/A/19.png",
    "/apartmentPictures/losCabos/A/20.png",
    "/apartmentPictures/losCabos/A/21.png",
    "/apartmentPictures/losCabos/A/22.png",
    "/apartmentPictures/losCabos/A/23.png",
    "/apartmentPictures/losCabos/A/24.png",
    "/apartmentPictures/losCabos/A/25.png",
    "/apartmentPictures/losCabos/A/26.png",
    "/apartmentPictures/losCabos/A/27.png",
    "/apartmentPictures/losCabos/A/28.png",
    "/apartmentPictures/losCabos/A/28.png",
    "/apartmentPictures/losCabos/A/30.png",
    "/apartmentPictures/losCabos/A/31.png",
    "/apartmentPictures/losCabos/A/32.png",
    "/apartmentPictures/losCabos/A/33.png",
    "/apartmentPictures/losCabos/A/34.png",
    "/apartmentPictures/losCabos/A/35.png",
    "/apartmentPictures/losCabos/A/36.png",
    "/apartmentPictures/losCabos/A/37.png",
    "/apartmentPictures/losCabos/A/38.png",
    "/apartmentPictures/losCabos/A/39.png",
    "/apartmentPictures/losCabos/A/40.png",
    "/apartmentPictures/losCabos/A/41.png",
    "/apartmentPictures/losCabos/A/42.png",
];
const depaCaboB = [
    "/apartmentPictures/losCabos/B/highlight.png",
    "/apartmentPictures/losCabos/B/1.png",
    "/apartmentPictures/losCabos/B/2.png",
    "/apartmentPictures/losCabos/B/3.png",
    "/apartmentPictures/losCabos/B/4.png",
    "/apartmentPictures/losCabos/B/5.png",
    "/apartmentPictures/losCabos/B/6.png",
    "/apartmentPictures/losCabos/B/7.png",
    "/apartmentPictures/losCabos/B/8.png",
    "/apartmentPictures/losCabos/B/9.png",
    "/apartmentPictures/losCabos/B/10.png",
    "/apartmentPictures/losCabos/B/11.png",
    "/apartmentPictures/losCabos/B/12.png",
    "/apartmentPictures/losCabos/B/13.png",
    "/apartmentPictures/losCabos/B/14.png",
    "/apartmentPictures/losCabos/B/15.png",
    "/apartmentPictures/losCabos/B/16.png",
    "/apartmentPictures/losCabos/B/17.png",
    "/apartmentPictures/losCabos/B/18.png",
    "/apartmentPictures/losCabos/B/19.png",
    "/apartmentPictures/losCabos/B/20.png",
    "/apartmentPictures/losCabos/B/21.png",
    "/apartmentPictures/losCabos/B/22.png",
    "/apartmentPictures/losCabos/B/23.png",
    "/apartmentPictures/losCabos/B/24.png",
    "/apartmentPictures/losCabos/B/25.png",
    "/apartmentPictures/losCabos/B/26.png",
    "/apartmentPictures/losCabos/B/27.png",
    "/apartmentPictures/losCabos/B/28.png",
    "/apartmentPictures/losCabos/B/28.png",
    "/apartmentPictures/losCabos/B/30.png",
    "/apartmentPictures/losCabos/B/31.png",
    "/apartmentPictures/losCabos/B/32.png",
    "/apartmentPictures/losCabos/B/33.png",
    "/apartmentPictures/losCabos/B/34.png",
    "/apartmentPictures/losCabos/B/35.png",
    "/apartmentPictures/losCabos/B/36.png",
    "/apartmentPictures/losCabos/B/37.png",
    "/apartmentPictures/losCabos/B/38.png",
    "/apartmentPictures/losCabos/B/39.png",
    "/apartmentPictures/losCabos/B/40.png",
    "/apartmentPictures/losCabos/B/41.png",
];
const depaMazaA = [
    "/apartmentPictures/mazatlan/A/highlight.png",
    "/apartmentPictures/mazatlan/A/1.png",
    "/apartmentPictures/mazatlan/A/2.png",
    "/apartmentPictures/mazatlan/A/3.png",
    "/apartmentPictures/mazatlan/A/4.png",
    "/apartmentPictures/mazatlan/A/5.png",
    "/apartmentPictures/mazatlan/A/6.png",
    "/apartmentPictures/mazatlan/A/7.png",
    "/apartmentPictures/mazatlan/A/8.png",
    "/apartmentPictures/mazatlan/A/9.png",
    "/apartmentPictures/mazatlan/A/10.png",
    "/apartmentPictures/mazatlan/A/11.png",
    "/apartmentPictures/mazatlan/A/12.png",
    "/apartmentPictures/mazatlan/A/13.png",
    "/apartmentPictures/mazatlan/A/14.png",
    "/apartmentPictures/mazatlan/A/15.png",
    "/apartmentPictures/mazatlan/A/16.png",
    "/apartmentPictures/mazatlan/A/17.png",
    "/apartmentPictures/mazatlan/A/18.png",
    "/apartmentPictures/mazatlan/A/19.png",
    "/apartmentPictures/mazatlan/A/20.png",
    "/apartmentPictures/mazatlan/A/21.png",
    "/apartmentPictures/mazatlan/A/22.png",
    "/apartmentPictures/mazatlan/A/23.png",
    "/apartmentPictures/mazatlan/A/24.png",
    "/apartmentPictures/mazatlan/A/25.png",
    "/apartmentPictures/mazatlan/A/26.png",
    "/apartmentPictures/mazatlan/A/27.png",
    "/apartmentPictures/mazatlan/A/28.png",
    "/apartmentPictures/mazatlan/A/28.png",
    "/apartmentPictures/mazatlan/A/30.png",
    "/apartmentPictures/mazatlan/A/31.png",
    "/apartmentPictures/mazatlan/A/32.png",
    "/apartmentPictures/mazatlan/A/33.png",
];
const depaMazaB = [
    "/apartmentPictures/mazatlan/B/highlight.png",
    "/apartmentPictures/mazatlan/B/1.png",
    "/apartmentPictures/mazatlan/B/2.png",
    "/apartmentPictures/mazatlan/B/3.png",
    "/apartmentPictures/mazatlan/B/4.png",
    "/apartmentPictures/mazatlan/B/5.png",
    "/apartmentPictures/mazatlan/B/6.png",
    "/apartmentPictures/mazatlan/B/7.png",
    "/apartmentPictures/mazatlan/B/8.png",
    "/apartmentPictures/mazatlan/B/9.png",
    "/apartmentPictures/mazatlan/B/10.png",
    "/apartmentPictures/mazatlan/B/11.png",
    "/apartmentPictures/mazatlan/B/12.png",
    "/apartmentPictures/mazatlan/B/13.png",
    "/apartmentPictures/mazatlan/B/14.png",
    "/apartmentPictures/mazatlan/B/15.png",
    "/apartmentPictures/mazatlan/B/16.png",
    "/apartmentPictures/mazatlan/B/17.png",
    "/apartmentPictures/mazatlan/B/18.png",
    "/apartmentPictures/mazatlan/B/19.png",
    "/apartmentPictures/mazatlan/B/20.png",
    "/apartmentPictures/mazatlan/B/21.png",
    "/apartmentPictures/mazatlan/B/22.png",
    "/apartmentPictures/mazatlan/B/23.png",
    "/apartmentPictures/mazatlan/B/24.png",
    "/apartmentPictures/mazatlan/B/25.png",
    "/apartmentPictures/mazatlan/B/26.png",
    "/apartmentPictures/mazatlan/B/27.png",
    "/apartmentPictures/mazatlan/B/28.png",
    "/apartmentPictures/mazatlan/B/29.png",
];

const BookingContainer = ({ props }) => {
    const router = useRouter();
    const [startDate, setStartDate] = useState(null);
    const [logged, setLogged] = useState(false);
    const [endDate, setEndDate] = useState(null);
    const [bookedDates, setBookedDates] = useState([]);
    const [bookingStarted, setBookingStarted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(false);
    const apartment = props._id;
    const { user, authenticated, error, register, login, logout, isAdmin } =
        useAuthContext();

    useEffect(() => {
        // console.log(props)
        setBookedDates(props.unAvailableDays);
    }, [props.unAvailableDays]);

    const handleBooking = () => {
        setBookingStarted(!bookingStarted);
    };

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const isDateBooked = (arriveDate, leaveDate) => {
        const datesBetween = getDatesBetween(arriveDate, leaveDate);
        return datesBetween.some(date => bookedDates.includes(date));
    };

    const getDatesBetween = (start, end) => {
        const dates = [];
        let currentDate = new Date(start);

        while (currentDate <= end) {
            dates.push(currentDate.toISOString().split("T")[0]);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dates;
    };

    const isButtonDisabled = startDate && endDate && startDate <= endDate && endDate < new Date();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleSubmit = (event) => {

        if (!selectedImage) {
            console.log('No image selected');
            return;
        }

        const formData = new FormData();
        formData.append('files', selectedImage);

        const bookingData = {
            _apartment: apartment,
            _user: user.user._id,
            arriveDate: startDate,
            leaveDate: endDate
        };

        formData.append('createBookingDto', JSON.stringify(bookingData))

        const booking = createBooking(formData, user.access_token);
        alert('Reservacion creada con exito!');
        router.push('/user')

        event.preventDefault();
        // Perform any necessary actions with the selected image
        // (e.g., upload it to a server, process it, etc.)
        // console.log(selectedImage);
    };



    return (
        <div>
            {!bookingStarted && (
                <div className="w-full">
                    <div className="p-5">
                        <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                        <h1 className="w-full text-left font-bold p-5">
                            Selecciona los dias a reservar
                        </h1>
                    </div>
                    <div></div>
                    <DatePicker
                        selectsRange
                        startDate={startDate}
                        endDate={endDate}
                        onChange={handleDateChange}
                        excludeDates={props.unAvailableDays.map((date) => new Date(date))}
                        filterDate={(date) => date >= new Date()}
                        className="p-5 block m-auto rounded w-1/2 text-slate-900 bg-slate-300"
                    />
                    <div className="w-4/5 m-auto h-px bg-gray-500 mt-5"></div>
                    <h1 className="w-4/5 text-left font-bold p-5">Reserva ahora</h1>
                    <div className="p-5 bg-slate-300 w-4/5 rounded block m-auto pb-5">
                        {startDate && endDate && (
                            <div className="p-5">
                                <p className="pb-5 font-bold">
                                    {isDateBooked(startDate, endDate)
                                        ? `Seleccione otra fecha`
                                        : "Disponible"}
                                </p>
                                <p className="pb-5">${props.pricePerNight} /noche</p>
                                {!isDateBooked(startDate, endDate) && (
                                    <p className="pb-5">
                                        Dias seleccionados:{" "}
                                        <span className="font-bold">
                                            {startDate.toISOString().split("T")[0]}
                                        </span>{" "}
                                        al{" "}
                                        <span className="font-bold">
                                            {endDate.toISOString().split("T")[0]}
                                        </span>
                                    </p>
                                )}
                                {isDateBooked(startDate, endDate) && (
                                    <p className="pb-5">Dias no disponibles</p>
                                )}
                                <button
                                    onClick={handleBooking}
                                    className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 p-5 border border-orange-700 rounded shadow disabled:bg-orange-200 disabled:border-orange-500"
                                    disabled={isDateBooked(startDate, endDate)}
                                >
                                    Reservar
                                </button>
                            </div>
                        )}
                        {!startDate && (
                            <div className="p-5">
                                <h1 className="font-bold">
                                    No Disponible, seleccione una fecha primero.
                                </h1>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {bookingStarted && (
                <div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="p-5 flex items-center">

                        {(props.location === "MazatlanA") && (
                            <img src={depaMazaA[0]} alt="Property" className="pt-5 w-1/3 rounded" />

                        )}
                        {(props.location === "MazatlanB") && (
                            <img src={depaMazaB[0]} alt="Property" className="pt-5 w-1/3 rounded" />

                        )}
                        {(props.location === "LosCabosA") && (
                            <img src={depaCaboA[0]} alt="Property" className="pt-5 w-1/3 rounded" />

                        )}
                        {(props.location === "LosCabosB") && (
                            <img src={depaCaboB[0]} alt="Property" className="pt-5 w-1/3 rounded" />

                        )}
                        <h1 className="w-full text-center font-bold">{props.title}</h1>
                    </div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="p-5">
                        <h1 className="w-4/5 text-left font-bold p-5">Tu viaje</h1>
                        <p className="p-5">
                            <span className="font-bold">{startDate.toISOString().split("T")[0]}</span> al{" "}
                            <span className="font-bold">{endDate.toISOString().split("T")[0]}</span>
                        </p>
                    </div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="p-5">
                        <h1 className="w-4/5 text-left font-bold p-5">Detalles de costo</h1>
                        <p className="p-5">
                            <span className="font-bold">{props.pricePerNight}</span> /noche x{" "}
                            <span className="font-bold">{getDatesBetween(startDate, endDate).length}</span> día(s) = <span className="font-bold">${((props.pricePerNight)
                                * (getDatesBetween(startDate, endDate).length))}</span> MXN
                        </p>
                    </div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="p-5 flex flex-wrap justify-center items-center">
                        <h1 className="w-full text-left font-bold p-5">Pago</h1>
                        <div className="border-2 border-solid border-slate-800 rounded p-5">
                            <h1>BBVA</h1>
                            <h3>3443 2234 6554 9943</h3>
                        </div>
                        <h1 className="w-full text-left font-bold p-5">Adjuntar comprobante de pago</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="w-full text-left font-bold p-5" htmlFor="image">Selecciona el comprobante:</label>
                                <input
                                    className="p-5 bg-or"
                                    type="file"
                                    id="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required={true}
                                />
                            </div>
                            <button className="w-full mt-5 bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" type="submit">Crear Reservacion</button>
                        </form>
                    </div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="p-5">
                        <p className="text-justify text-xs p-5">
                            Una vez confirmado su pago, se verá reflejada su reserva en el perfil
                            de su cuenta, donde podrá consultar la contraseña de la caja de llaves.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingContainer;
