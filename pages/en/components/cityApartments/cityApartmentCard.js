import Link from 'next/link';

const apartmentsInfo = [
    {
        _id: "64718e506d50daaa11049a69",
        title: "Beautiful condo in Los Cabos",
        description: "Incredible condo with a beautiful view from its rooftop with pool",
        location: "LosCabosA",
    },
    {
        _id: "647191a66d50daaa11049a6e",
        title: "Condo with incredible views in Los Cabos",
        description: "Fascinating condo with incredible views of the entire city",
        location: "LosCabosB",
    },
    {
        _id: "647192fb6d50daaa11049a71",
        title: "New condominium in Zona Dorada of Mazatlan",
        description: "Condominium with an incredible view of the beach in the Golden Zone, very close to the beach.",
        location: "MazatlanA",
    },
    {
        _id: "647193cb6d50daaa11049a74",
        title: "New Apartment in the Golden Zone of Mazatlan",
        description: "Apartment with an incredible view of the beach in the Golden Zone, very close to the beach.",
        location: "MazatlanB",
    }
];

function ApartmentCard(data) {
    const { _id, title, description, thumbnail, location } = data.data;
    return (
        <div className='bg-transparent pt-10 p-8'>
            {location === "LosCabosA" && (
                <div>
                    <div className='rounded p-3 shadow-lg overflow-hidden'>
                        <img className='' src={'/apartmentPictures/losCabos/A/highlight.png'} alt='view of los cabos' />
                    </div>
                    <div className='flex p-3'>
                        <Link className='bg-orange-400 p-2 rounded shadow-lg' href={`/en/apartment/${apartmentsInfo[0]._id}`}>Details</Link>
                        <h3 className='text-zinc-500 pl-4 pt-2'>{apartmentsInfo[0].title}</h3>
                    </div>
                    <p className='text-zinc-800 p-3 text-justify'>{apartmentsInfo[0].description}</p>
                </div>
            )}
            {location === "LosCabosB" && (
                <div>
                    <div className='rounded p-3 shadow-lg overflow-hidden'>
                        <img src={'/apartmentPictures/losCabos/B/highlight.png'} alt='view of los cabos' />
                    </div>
                    <div className='flex p-3'>
                        <Link className='bg-orange-400 p-2 rounded shadow-lg' href={`/en/apartment/${apartmentsInfo[1]._id}`}>Details</Link>
                        <h3 className='text-zinc-500 pl-4 pt-2'>{apartmentsInfo[1].title}</h3>
                    </div>
                    <p className='text-zinc-800 p-3 text-justify'>{apartmentsInfo[1].description}</p>
                </div>
            )}
            {location === "MazatlanA" && (
                <div>
                    <div className='rounded p-3 shadow-lg overflow-hidden'>
                        <img src={'/apartmentPictures/mazatlan/A/highlight.png'} alt='view of los cabos' />
                    </div>
                    <div className='flex p-3'>
                        <Link className='bg-orange-400 p-2 rounded shadow-lg' href={`/en/apartment/${apartmentsInfo[2]._id}`}>Details</Link>
                        <h3 className='text-zinc-500 pl-4 pt-2'>{apartmentsInfo[2].title}</h3>
                    </div>
                    <p className='text-zinc-800 p-3 text-justify'>{apartmentsInfo[2].description}</p>
                </div>
            )}
            {location === "MazatlanB" && (
                <div>
                    <div className='rounded p-3 shadow-lg overflow-hidden'>
                        <img src={'/apartmentPictures/mazatlan/B/highlight.png'} alt='view of los cabos' />
                    </div>
                    <div className='flex p-3'>
                        <Link className='bg-orange-400 p-2 rounded shadow-lg' href={`/en/apartment/${apartmentsInfo[3]._id}`}>Details</Link>
                        <h3 className='text-zinc-500 pl-4 pt-2'>{apartmentsInfo[3].title}</h3>
                    </div>
                    <p className='text-zinc-800 p-3 text-justify'>{apartmentsInfo[3].description}</p>
                </div>
            )}
        </div>
    );
}

export default ApartmentCard;
