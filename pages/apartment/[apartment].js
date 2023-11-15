import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "../../components/navbar";
import ImagesContainer from "../../components/cityApartments/imagesContainer";
import MapContainer from "../../components/cityApartments/mapContainer";
import BookingContainer from "../../components/cityApartments/bookingContainer";
import { createReview, findReviewByApartmentId, getAllUserBookings, actionReview, getAllApartmentsUnlocked } from "../api/endpoints";
import { useAuthContext } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Image from "next/image";
import loading from '../../public/loading.gif'


import { bed } from "../../public/bed.png";
import { work } from "../../public/work-from-home.png";
import { key } from "../../public/key.png";
import { Review } from "../../components/review";

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

export default function Apartment() {
    const [apartmentData, setApartmentData] = useState(null);
    const { user, authenticated, error, register, login, logout, isAdmin } =
        useAuthContext();
    const router = useRouter();
    const data = router.query.apartment;
    const [reviews, setReviews] = useState(null);
    const [hasRented, setHasRented] = useState(false);

    useEffect(() => {
        (async () => {
            // if (user) {
            const apartment = await getAllApartmentsUnlocked();
            apartment.map(async (item) => {
                if (item._id == data) {
                    setApartmentData(item)
                    // apId = item._id;
                    const reviews = await findReviewByApartmentId(item._id);
                    if (reviews.length > 0) {
                        setReviews(reviews);
                    }
                }
            })
            if (user) {
                const bookings = await getAllUserBookings(user._id, user.access_token);
                bookings.map((item2) => {
                    if (item2.user.name === user.user.name) {
                        setHasRented(true);
                    }
                })
            }
        })();
    });

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButton = async (state, reviewId) => {
        if (state) {
            await actionReview(reviewId, user.user._id, 'like', user.access_token);

        } else if (!state) {
            await actionReview(reviewId, user.user._id, 'dislike', user.access_token);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const createReviewDto = {
            _user: user.user._id,
            _apartment: apartmentData._id,
            comment: inputValue
        }
        const review = await createReview(createReviewDto, user.access_token);
        if (review) {
            alert("Comentario enviado con exito!");
        }
    };


    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    const handleClick = () => {
        setShowPopup(!showPopup);
    };
    const handleClick2 = () => {
        setShowPopup2(!showPopup2);
    };

    return (
        <div>
            <Head>
                <title>LosCabos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className=" w-full h-screen bg-slate-200 pt-28 text-slate-800 md:pt-32 md:p-5">
                {!apartmentData && (
                    <div className='w-full flex justify-center mt-10 '>
                        <Image src={loading} alt='loading gif' />
                    </div>
                )}
                {apartmentData && (
                    <>
                        {(apartmentData.location === "MazatlanA") && (
                            <ImagesContainer images={depaMazaA} />
                        )}
                        {(apartmentData.location === "MazatlanB") && (
                            <ImagesContainer images={depaMazaB} />
                        )}
                        {(apartmentData.location === "LosCabosA") && (
                            <ImagesContainer images={depaCaboA} />
                        )}
                        {(apartmentData.location === "LosCabosB") && (
                            <ImagesContainer images={depaCaboB} />
                        )}
                        <div className="">
                            <div className="p-5 text-2xl ">
                                <h1 className="w-full text-center font-bold">
                                    {apartmentData.title}
                                </h1>
                            </div>
                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                            <div className="lg:flex">
                                <div className="lg:w-1/3">
                                    {apartmentData.highlights.map((item) => {
                                        let source = "";
                                        switch (item.title) {
                                            case "Area para trabajar":
                                                source = "/work-from-home.png";
                                                break;
                                            case "Llegada por cuenta propia":
                                                source = "/key.png";
                                                break;
                                            case "Relajate":
                                                source = "/bed.png";
                                                break;
                                            default:
                                                source = "/bed.png";
                                                break;
                                        }
                                        return (
                                            <article className="p-5 text-center">
                                                <div className="lg:flex lg:justify-center">
                                                    <Image src={source} width={64} height={64} key={item._id} alt="icon" />
                                                </div>
                                                <h2 className="font-bold">{item.title}</h2>
                                                <h3>{item.description}</h3>
                                            </article>
                                        );
                                    })}
                                </div>

                                <div className="lg:w-2/3">
                                    <button className="p-5 text-2xl lg:hover:scale-105" onClick={handleClick}>
                                        <div className="w-4/5 m-auto h-px bg-gray-500 lg:hidden"></div>
                                        <h1 className="w-full text-left font-bold p-5 lg:p-0">
                                            Acerca de este alojamiento
                                        </h1>
                                        <div
                                            className={`h-300 overflow-hidden ${showPopup ? 'pl-5 pr-5' : ''
                                                }`}
                                            style={{ maxHeight: '300px', position: 'relative' }}
                                        >
                                            <p className="p-5 text-justify">{apartmentData.description}</p>
                                            {showPopup && (
                                                <p className="pl-5 pr-5 text-justify">{apartmentData.about}</p>
                                            )}
                                            {!showPopup && (
                                                <div
                                                    className="absolute rounded bottom-0 w-full h-8 bg-gradient-to-t from-white pointer-events-none"
                                                    style={{
                                                        backgroundImage:
                                                            'linear-gradient(rgba(240, 240, 240, 0),rgba(194, 204, 232, 0.8))',
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </button>
                                    <button onClick={handleClick2} className="p-5 text-2xl lg:hover:scale-105">
                                        <div className="w-4/5 m-auto h-px bg-gray-500 lg:hidden"></div>
                                        <h1 className="w-full text-left font-bold p-5 lg:p-0">
                                            Comodidades de este alojamiento
                                        </h1>
                                        {(!showPopup2 && (
                                            <article className="p-5 lg:p-0 flex flex-wrap justify-center list-none">
                                                {apartmentData.amenities.map((item, index) => {
                                                    if (index < 3) {
                                                        return (
                                                            <div className="lg:p-5">
                                                                <div className="lg:flex lg:justify-center">
                                                                    <Image src="/key.png" alt="icon" key={index} width={64} height={64} />
                                                                </div>
                                                                <li className="p-5 lg:w-full">{item}</li>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                                <div
                                                    className=" rounded bottom-0 w-full h-8 bg-gradient-to-t from-white pointer-events-none"
                                                    style={{
                                                        backgroundImage:
                                                            'linear-gradient(rgba(240, 240, 240, 0),rgba(194, 204, 232, 0.8))',
                                                    }}
                                                />
                                            </article>
                                        ))}
                                        {(showPopup2 && (
                                            <article className="p-5 flex flex-wrap justify-between list-none">
                                                {apartmentData.amenities.map((item, index) => {
                                                    return (
                                                        <div className="lg:p-5">
                                                            <div className="lg:flex lg:justify-center">
                                                                <Image src="/key.png" alt="icon" key={index} width={64} height={64} />
                                                            </div>
                                                            <li className="p-5 lg:w-full">{item}</li>
                                                        </div>
                                                    );
                                                })}
                                            </article>
                                        ))}
                                    </button>

                                </div>

                            </div>

                            <MapContainer
                                location={apartmentData.location}
                            />
                            <BookingContainer props={apartmentData} />
                            <div className="lg:flex lg:justify-around">
                                <div className="p-5 xl:p-20 text-2xl lg:text-center">
                                    <div className="w-4/5 m-auto h-px bg-gray-500 lg:hidden"></div>
                                    <h1 className="w-full text-left lg:text-center font-bold p-5">Reglamento</h1>
                                    <ul className="list-disc p-5">
                                        {apartmentData.rules.map((item) => {
                                            return (
                                                <li className="pb-5" key={item}>
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="p-5 text-2xl">
                                    <div className="w-4/5 m-auto h-px bg-gray-500 lg:hidden"></div>
                                    {hasRented && (
                                        <div>
                                            <h1 className="w-full text-left font-bold p-5">Crea una reseña</h1>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                            <form className="flex justify-around p-5" onSubmit={handleSubmit}>
                                                <input
                                                    className="rounded text-slate-200"
                                                    type="text"
                                                    value={inputValue}
                                                    onChange={handleInputChange}
                                                    placeholder=" Deja un comentario..."
                                                />
                                                <button className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow" type="submit">Enviar</button>
                                            </form>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>

                                        </div>
                                    )}
                                    <h1 className="w-full text-left font-bold p-5 text-2xl">Reseñas</h1>
                                    <div className="p-5">
                                        {user != null && (
                                            (reviews) && (
                                                reviews.map((item) => {
                                                    return (
                                                        <Review userId={user.user._id} handleButton={handleButton} item={item} />
                                                    );
                                                })
                                            )

                                        )}

                                        {user == null && (
                                            (reviews) && (
                                                reviews.map((item) => {
                                                    return (
                                                        <Review userId={0} handleButton={handleButton} item={item} />
                                                    );
                                                })
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
