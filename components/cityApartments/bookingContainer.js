import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingContainer = ({ props }) => {
    const router = useRouter();
    const [startDate, setStartDate] = useState(null);
    const [logged, setLogged] = useState(false);
    const [endDate, setEndDate] = useState(null);
    const [bookedDates, setBookedDates] = useState([]);
    const [bookingStarted, setBookingStarted] = useState(false);

    useEffect(() => {
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
                                <p className="pb-5">${props.price} /noche</p>
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
                        <img src={props.photos[0]} alt="Property" className="pt-5 w-1/3 rounded" />
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
                            <span className="font-bold">{props.price}</span> /noche x{" "}
                            <span className="font-bold">{getDatesBetween(startDate, endDate).length}</span> día(s) = <span className="font-bold">${((props.price)
                                * (getDatesBetween(startDate, endDate).length))}</span> MXN
                        </p>
                    </div>
                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                    <div className="p-5 flex flex-wrap justify-center">
                        <h1 className="w-full text-left font-bold p-5">Pago</h1>
                        <button className=" bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" onClick={(() => router.push('/login'))}>Iniciar Sesión</button>
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
