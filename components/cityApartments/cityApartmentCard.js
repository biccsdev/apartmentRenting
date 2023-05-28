import Link from 'next/link';

function ApartmentCard(data) {
    const { _id, title, description, thumbnail, location } = data.data;
    return (
        <div className='bg-transparent pt-10 p-8'>
            {(location === "LosCabosA") && (
                <div className='rounded p-3 shadow-lg overflow-hidden'>
                    <img src={'/apartmentPictures/losCabos/A/highlight.png'} alt='view of los cabos' />
                </div>
            )}
            {(location === "LosCabosB") && (
                <div className='rounded p-3 shadow-lg overflow-hidden'>
                    <img src={'/apartmentPictures/losCabos/B/highlight.png'} alt='view of los cabos' />
                </div>
            )}
            {(location === "MazatlanA") && (
                <div className='rounded p-3 shadow-lg overflow-hidden'>
                    <img src={'/apartmentPictures/mazatlan/A/highlight.png'} alt='view of los cabos' />
                </div>
            )}
            {(location === "MazatlanB") && (
                <div className='rounded p-3 shadow-lg overflow-hidden'>
                    <img src={'/apartmentPictures/mazatlan/B/highlight.png'} alt='view of los cabos' />
                </div>
            )}

            <div className='flex p-3'><Link className='bg-orange-400 p-2 rounded shadow-lg ' href={`/apartment/${_id}`} >Detalles</Link>
                <h3 className='text-zinc-500 pl-4 pt-2'>{title}</h3>
            </div>
            <p className='text-zinc-800 p-3 text-justify'>{description}</p>
        </div>
    );
}

export default ApartmentCard;