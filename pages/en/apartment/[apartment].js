import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import NavBar from "../components/navbar";
import ImagesContainer from "../components/cityApartments/imagesContainer";
import MapContainer from "../components/cityApartments/mapContainer";
import BookingContainer from "../components/cityApartments/bookingContainer";
import {
    createReview,
    findReviewByApartmentId,
    getAllUserBookings,
    getApartmentById,
} from "../api/endpoints";
import { useAuthContext } from "../../../hooks/useAuth";
import { useEffect, useState } from "react";

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

const apartmentsInfo = [
    {
        _id: "64718e506d50daaa11049a69",
        title: "Beautiful condo in Los Cabos",
        description:
            "Incredible condo with a beautiful view from its rooftop with pool",
        photosUrls: [],
        highlights: [
            {
                title: "Area to work",
                description: "A common area with wifi suitable for working.",
            },
            {
                title: "Arrival by own account",
                description: "Make check-in easy with the keypad lock.",
            },
            {
                title: "Relax",
                description: "This is one of the few places in the area with a pool.",
            },
        ],
        about:
            "Incredible condominium very close to the center. It has a rooftop with a barbecue and pool to enjoy incredible views. This condo has everything you need to have a pleasant time, you will have an incomparable vacation.",
        keyBoxPassword: "5555",
        location: "LosCabosB",
        amenities: [
            "Seaview",
            "Kitchen",
            "Area to work",
            "City Skyline View",
            "Wifi",
            "Free gated parking on premises",
            "140-inch HD TV with Amazon Prime Video, Apple TV, Disney+, HBO Max, Netflix",
            "Cleaning products",
            "Hot water",
            "Washer and dryer",
            "Towels, sheets, soap and toilet paper",
            "Hooks",
            "Iron",
            "Air Conditioning and Heating",
            "Kitchen",
            "Fridge",
            "Microwave",
            "Cutlery",
            "Coffee maker",
            "Blender",
        ],
        map: {
            latitude: "22.885593",
            longitude: "-109.922154",
        },
        unAvailableDays: [],
        pricePerNight: 2500,
        rules: [
            "Arrival from 15:00",
            "Departure before 12:00",
            "6 guests maximum",
            "Arrival on your own with keyboard",
        ],
        language: "en",
    },
    {
        _id: "647191a66d50daaa11049a6e",
        title: "Condo with incredible views in Los Cabos",
        description: "Fascinating condo with incredible views of the entire city",
        photosUrls: [],
        highlights: [
            {
                title: "Area to work",
                description: "A room with WIFI suitable for working",
            },
            {
                title: "Arrival by own account",
                description: "Make check-in easy with the keypad lock.",
            },
            {
                title: "Excellent Experience",
                description: "This is one of the best places in the Los Cabos area.",
            },
        ],
        about:
            "Condo 'Refugio El Paraiso' is a beautiful, spacious and relaxing place with beautiful panoramic views. Located 5 minutes from the marina and tourist attractions. It is located within a private community with controlled access 24 hours a day. It has a pool, gym, kitchen and two parking spaces.",
        keyBoxPassword: "5555",
        location: "LosCabosA",
        amenities: [
            "1 queen bed",
            "2 single mattresses",
            "1 inflatable mattress",
            "1 floor mattress",
            "1 sofa bed",
            "Seaview",
            "Hair dryer",
            "Hot water",
            "Washing machine",
            "cabinet for drying clothes",
            "Hooks",
            "Iron",
            "Air-conditioning",
            "Portable fans",
            "Smoke alarm",
            "Fire extinguisher",
            "First aid box",
            "WIFI",
            "Fridge",
            "Microwave",
            "Crockery",
            "Oven",
            "Stove",
            "Coffee maker",
            "Toaster",
            "Blender",
            "Grill",
            "Swimming pool",
            "Gym",
        ],
        map: {
            latitude: "22.884295",
            longitude: "-109.922317",
        },
        unAvailableDays: [],
        pricePerNight: 2700,
        rules: [
            "Check In at 15:00",
            "Check out before 12:00",
            "Max 5 guest",
            "Self Check In with keys box",
        ],
        language: "en",
    },
    {
        _id: "647192fb6d50daaa11049a71",
        title: "New condominium in Zona Dorada of Mazatlan",
        description:
            "Condominium with an incredible view of the beach in the Golden Zone, very close to the beach.",
        photosUrls: [],
        highlights: [
            {
                title: "Area to work",
                description: "A room with WIFI suitable for working",
            },
            {
                title: "Arrival by own account",
                description: "Check in easily with the keypad lock.",
            },
            {
                title: "Excellent experience",
                description: "This is one of the best places in the Mazatlan area.",
            },
        ],
        about:
            "Brand new apartment in Torre BNI, located in the heart of the Golden Zone! Close to shopping malls, hospitals, golf courses, and the best beach across the street! Beautiful views of the sea from the roof of the tower. Fully equipped, with air conditioning, washer-dryer, full kitchen with all cooking utensils, fast wifi, 65-inch TV and more. One parking space, rooftop pool and gym.",
        keyBoxPassword: "5555",
        location: "MazatlanA",
        amenities: [
            "1 double bed",
            "2 single mattresses",
            "Sea view",
            "Hair dryer",
            "Hot water",
            "Washer and dryer",
            "Dining room",
            "Hooks",
            "Iron",
            "Air-conditioning",
            "Fans",
            "Cleaning products",
            "2 TVs",
            "Swimming pool",
            "WIFI",
            "Fridge",
            "Microwave",
            "Crockery",
            "Stove",
            "Coffee maker",
            "Blender",
            "Grill",
            "Swimming pool",
            "Gym",
        ],
        map: {
            latitude: "23.25836",
            longitude: "-106.46167",
        },
        unAvailableDays: ["2023-06-03T07:00:00.000Z", "2023-06-04T07:00:00.000Z"],
        pricePerNight: 2500,
        rules: [
            "Check In at 15:00",
            "Check out before 12:00",
            "Max 6 guest",
            "Self Check In with keys box",
        ],
        language: "en",
    },
    {
        _id: "647193cb6d50daaa11049a74",
        title: "New Apartment in the Golden Zone of Mazatlan",
        description:
            "Apartment with an incredible view of the beach in the Golden Zone, very close to the beach.",
        photosUrls: [],
        highlights: [
            {
                title: "Area for working",
                description: "Room with WIFI and everything you need to work",
            },
            {
                title: "Arrival by own account",
                description: "Check in easily with the keypad lock.",
            },
            {
                title: "Excellent Experience",
                description: "This is one of the best places in the Mazatlan area.",
            },
        ],
        about:
            "Brand new apartment in Departamentos De La Ostra, located in the heart of the Golden Zone! Close to shopping malls, hospitals, golf courses, and the best beach across the street! Beautiful views of the sea from the roof of the tower. Fully equipped, with air conditioning, washer-dryer, full kitchen with all cooking utensils, fast wifi, 65-inch TV and more. One parking space, pool and jacuzzi.",
        keyBoxPassword: "5555",
        location: "MazatlanB",
        amenities: [
            "2 queen beds",
            "2 single mattresses",
            "Sea view",
            "Jacuzzi",
            "Hot water",
            "Washer and dryer",
            "Dining room",
            "Outdoor chairs",
            "Iron",
            "Air-conditioning",
            "Fans",
            "Cleaning products",
            "1 TVs",
            "Swimming pool",
            "WIFI",
            "Fridge",
            "Microwave",
            "Stove",
            "Coffee maker",
            "Blender",
            "Grill",
            "Terrace",
            "Parking lot",
        ],
        map: {
            latitude: "23.260975",
            longitude: "-106.460547",
        },
        unAvailableDays: [],
        pricePerNight: 2500,
        rules: [
            "Check In at 15:00",
            "Check out before 12:00",
            "Max 6 guest",
            "Self Check In with keys box",
        ],
        language: "en",
    },
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
            if (user) {
                const apartment = await getApartmentById(data, user.access_token);
                const bookings = await getAllUserBookings(user._id, user.access_token);
                bookings.map((item) => {
                    if (item.user.name === user.user.name) {
                        setHasRented(true);
                    }
                });
                setApartmentData(apartment);
                const reviews = await findReviewByApartmentId(
                    apartment._id,
                    user.access_token
                );
                if (reviews.length > 0) {
                    setReviews(reviews);
                }
            }
            if (!authenticated) {
                router.push("/login");
            }
        })();
    }, []);

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const createReviewDto = {
            _user: user.user._id,
            _apartment: apartmentData._id,
            comment: inputValue,
        };
        const review = await createReview(createReviewDto, user.access_token);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>LosCabos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className=" w-full h-full bg-slate-200 pt-28 text-slate-800 md:pt-32 md:p-5 xl:p-44">
                {!apartmentData && (
                    <div className="font-bold pt-20 text-center h-screen">
                        <h1>LOADING...</h1>
                    </div>
                )}
                {apartmentData && (
                    <>
                        {apartmentData.location === "MazatlanA" && (
                            <div>
                                <ImagesContainer images={depaMazaA} />
                                <div className="p-5 xl:p-20">
                                    <h1 className="w-full text-center font-bold pb-5">
                                        {apartmentsInfo[2].title}
                                    </h1>
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    {apartmentsInfo[2].highlights.map((item) => {
                                        return (
                                            <article className="p-5">
                                                <h2 className="font-bold">{item.title}</h2>
                                                <h3>{item.description}</h3>
                                            </article>
                                        );
                                    })}
                                </div>
                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">
                                        About this accommodation
                                    </h1>
                                    <p className="p-5 text-justify">
                                        {apartmentsInfo[2].description}
                                    </p>
                                    <p className="pl-5 pr-5 text-justify">
                                        {apartmentsInfo[2].about}
                                    </p>
                                </div>
                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">
                                        Amenities of this accommodation
                                    </h1>
                                    {apartmentsInfo[2].amenities.map((item) => {
                                        return (
                                            <article className="p-5 flex">
                                                <li className="p-5">{item}</li>
                                            </article>
                                        );
                                    })}
                                </div>
                                <MapContainer location={apartmentsInfo[2].location} />
                                <BookingContainer props={apartmentData} />

                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">Rules</h1>
                                    <ul className="list-disc p-5">
                                        {apartmentsInfo[2].rules.map((item) => {
                                            return (
                                                <li className="pb-5" key={item}>
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="p-5 ">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    {hasRented && (
                                        <div>
                                            <h1 className="w-full text-left font-bold p-5">
                                                Create a review
                                            </h1>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                            <form
                                                className="flex justify-around p-5"
                                                onSubmit={handleSubmit}
                                            >
                                                <input
                                                    className="rounded text-slate-200"
                                                    type="text"
                                                    value={inputValue}
                                                    onChange={handleInputChange}
                                                    placeholder=" Leave a comment..."
                                                />
                                                <button
                                                    className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow"
                                                    type="submit"
                                                >
                                                    Enviar
                                                </button>
                                            </form>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                        </div>
                                    )}
                                    <h1 className="w-full text-left font-bold p-5">Reviews</h1>
                                    <div className="p-5">
                                        {reviews &&
                                            reviews.map((item) => {
                                                return (
                                                    <div
                                                        className="pb-5 bg-slate-300 p-5 rounded"
                                                        key={item}
                                                    >
                                                        <h1 className="font-bold">{item.creator}</h1>
                                                        <h1>{item.comment}</h1>
                                                        <h1 className="font-bold">
                                                            {
                                                                new Date(item.createdAt)
                                                                    .toISOString()
                                                                    .split("T")[0]
                                                            }
                                                        </h1>
                                                    </div>
                                                );
                                            })}
                                        {!reviews && (
                                            <div>
                                                <h1 className="w-full text-center font-bold p-5">
                                                    No reviews at the moment.
                                                </h1>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {apartmentData.location === "MazatlanB" && (
                            <div>
                                <ImagesContainer images={depaMazaB} />
                                <div className="p-5 xl:p-20">
                                    <h1 className="w-full text-center font-bold pb-5">
                                        {apartmentsInfo[3].title}
                                    </h1>
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    {apartmentsInfo[3].highlights.map((item) => {
                                        return (
                                            <article className="p-5">
                                                <h2 className="font-bold">{item.title}</h2>
                                                <h3>{item.description}</h3>
                                            </article>
                                        );
                                    })}
                                </div>
                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">
                                        About this accommodation
                                    </h1>
                                    <p className="p-5 text-justify">
                                        {apartmentsInfo[3].description}
                                    </p>
                                    <p className="pl-5 pr-5 text-justify">
                                        {apartmentsInfo[3].about}
                                    </p>
                                </div>
                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">
                                        Amenities of this accommodation
                                    </h1>
                                    {apartmentsInfo[3].amenities.map((item) => {
                                        return (
                                            <article className="p-5 flex">
                                                <li className="p-5">{item}</li>
                                            </article>
                                        );
                                    })}
                                </div>
                                <MapContainer location={apartmentsInfo[2].location} />
                                <BookingContainer props={apartmentData} />

                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">Rules</h1>
                                    <ul className="list-disc p-5">
                                        {apartmentsInfo[3].rules.map((item) => {
                                            return (
                                                <li className="pb-5" key={item}>
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="p-5 ">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    {hasRented && (
                                        <div>
                                            <h1 className="w-full text-left font-bold p-5">
                                                Create a review
                                            </h1>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                            <form
                                                className="flex justify-around p-5"
                                                onSubmit={handleSubmit}
                                            >
                                                <input
                                                    className="rounded text-slate-200"
                                                    type="text"
                                                    value={inputValue}
                                                    onChange={handleInputChange}
                                                    placeholder=" Leave a comment..."
                                                />
                                                <button
                                                    className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow"
                                                    type="submit"
                                                >
                                                    Enviar
                                                </button>
                                            </form>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                        </div>
                                    )}
                                    <h1 className="w-full text-left font-bold p-5">Reviews</h1>
                                    <div className="p-5">
                                        {reviews &&
                                            reviews.map((item) => {
                                                return (
                                                    <div
                                                        className="pb-5 bg-slate-300 p-5 rounded"
                                                        key={item}
                                                    >
                                                        <h1 className="font-bold">{item.creator}</h1>
                                                        <h1>{item.comment}</h1>
                                                        <h1 className="font-bold">
                                                            {
                                                                new Date(item.createdAt)
                                                                    .toISOString()
                                                                    .split("T")[0]
                                                            }
                                                        </h1>
                                                    </div>
                                                );
                                            })}
                                        {!reviews && (
                                            <div>
                                                <h1 className="w-full text-center font-bold p-5">
                                                    No reviews at the moment.
                                                </h1>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {apartmentData.location === "LosCabosA" && (
                            <div>
                                <ImagesContainer images={depaCaboA} />
                                <div className="p-5 xl:p-20">
                                    <h1 className="w-full text-center font-bold pb-5">
                                        {apartmentsInfo[1].title}
                                    </h1>
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    {apartmentsInfo[1].highlights.map((item) => {
                                        return (
                                            <article className="p-5">
                                                <h2 className="font-bold">{item.title}</h2>
                                                <h3>{item.description}</h3>
                                            </article>
                                        );
                                    })}
                                </div>
                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">
                                        About this accommodation
                                    </h1>
                                    <p className="p-5 text-justify">
                                        {apartmentsInfo[1].description}
                                    </p>
                                    <p className="pl-5 pr-5 text-justify">
                                        {apartmentsInfo[1].about}
                                    </p>
                                </div>
                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">
                                        Amenities of this accommodation
                                    </h1>
                                    {apartmentsInfo[1].amenities.map((item) => {
                                        return (
                                            <article className="p-5 flex">
                                                <li className="p-5">{item}</li>
                                            </article>
                                        );
                                    })}
                                </div>
                                <MapContainer location={apartmentsInfo[1].location} />
                                <BookingContainer props={apartmentData} />

                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">Rules</h1>
                                    <ul className="list-disc p-5">
                                        {apartmentsInfo[1].rules.map((item) => {
                                            return (
                                                <li className="pb-5" key={item}>
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="p-5 ">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    {hasRented && (
                                        <div>
                                            <h1 className="w-full text-left font-bold p-5">
                                                Create a review
                                            </h1>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                            <form
                                                className="flex justify-around p-5"
                                                onSubmit={handleSubmit}
                                            >
                                                <input
                                                    className="rounded text-slate-200"
                                                    type="text"
                                                    value={inputValue}
                                                    onChange={handleInputChange}
                                                    placeholder=" Leave a comment..."
                                                />
                                                <button
                                                    className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow"
                                                    type="submit"
                                                >
                                                    Enviar
                                                </button>
                                            </form>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                        </div>
                                    )}
                                    <h1 className="w-full text-left font-bold p-5">Reviews</h1>
                                    <div className="p-5">
                                        {reviews &&
                                            reviews.map((item) => {
                                                return (
                                                    <div
                                                        className="pb-5 bg-slate-300 p-5 rounded"
                                                        key={item}
                                                    >
                                                        <h1 className="font-bold">{item.creator}</h1>
                                                        <h1>{item.comment}</h1>
                                                        <h1 className="font-bold">
                                                            {
                                                                new Date(item.createdAt)
                                                                    .toISOString()
                                                                    .split("T")[0]
                                                            }
                                                        </h1>
                                                    </div>
                                                );
                                            })}
                                        {!reviews && (
                                            <div>
                                                <h1 className="w-full text-center font-bold p-5">
                                                    No reviews at the moment.
                                                </h1>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {apartmentData.location === "LosCabosB" && (
                            <div>
                                <ImagesContainer images={depaCaboB} />
                                <div className="p-5 xl:p-20">
                                    <h1 className="w-full text-center font-bold pb-5">
                                        {apartmentsInfo[0].title}
                                    </h1>
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    {apartmentsInfo[0].highlights.map((item) => {
                                        return (
                                            <article className="p-5">
                                                <h2 className="font-bold">{item.title}</h2>
                                                <h3>{item.description}</h3>
                                            </article>
                                        );
                                    })}
                                </div>
                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">
                                        About this accommodation
                                    </h1>
                                    <p className="p-5 text-justify">
                                        {apartmentsInfo[0].description}
                                    </p>
                                    <p className="pl-5 pr-5 text-justify">
                                        {apartmentsInfo[0].about}
                                    </p>
                                </div>
                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">
                                        Amenities of this accommodation
                                    </h1>
                                    {apartmentsInfo[0].amenities.map((item) => {
                                        return (
                                            <article className="p-5 flex">
                                                <li className="p-5">{item}</li>
                                            </article>
                                        );
                                    })}
                                </div>
                                <MapContainer location={apartmentsInfo[0].location} />
                                <BookingContainer props={apartmentData} />

                                <div className="p-5 xl:p-20">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    <h1 className="w-full text-left font-bold p-5">Rules</h1>
                                    <ul className="list-disc p-5">
                                        {apartmentsInfo[0].rules.map((item) => {
                                            return (
                                                <li className="pb-5" key={item}>
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="p-5 ">
                                    <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                    {hasRented && (
                                        <div>
                                            <h1 className="w-full text-left font-bold p-5">
                                                Create a review
                                            </h1>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                            <form
                                                className="flex justify-around p-5"
                                                onSubmit={handleSubmit}
                                            >
                                                <input
                                                    className="rounded text-slate-200"
                                                    type="text"
                                                    value={inputValue}
                                                    onChange={handleInputChange}
                                                    placeholder=" Leave a comment..."
                                                />
                                                <button
                                                    className="bg-orange-400 hover:bg-gray-100 text-slate-100 font-semibold py-2 px-4 border border-orange-700 rounded shadow"
                                                    type="submit"
                                                >
                                                    Enviar
                                                </button>
                                            </form>
                                            <div className="w-4/5 m-auto h-px bg-gray-500"></div>
                                        </div>
                                    )}
                                    <h1 className="w-full text-left font-bold p-5">Reviews</h1>
                                    <div className="p-5">
                                        {reviews &&
                                            reviews.map((item) => {
                                                return (
                                                    <div
                                                        className="pb-5 bg-slate-300 p-5 rounded"
                                                        key={item}
                                                    >
                                                        <h1 className="font-bold">{item.creator}</h1>
                                                        <h1>{item.comment}</h1>
                                                        <h1 className="font-bold">
                                                            {
                                                                new Date(item.createdAt)
                                                                    .toISOString()
                                                                    .split("T")[0]
                                                            }
                                                        </h1>
                                                    </div>
                                                );
                                            })}
                                        {!reviews && (
                                            <div>
                                                <h1 className="w-full text-center font-bold p-5">
                                                    No reviews at the moment.
                                                </h1>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}
