import Link from 'next/link';

function ApartmentCard(data) {
    const { _id, title, description, thumbnail, location } = data.data;
    console.log(location)

    const imageSrc = `/apartmentPictures/${location.slice(0, location.length - 1).toLowerCase()}/${location.slice(location.length - 1, location.length)}/highlight.png`;

    return (
        <div className='bg-white pt-10 p-8 md:w-2/5 md:m-auto'>
            <div className='rounded p-3 shadow-lg overflow-hidden md:w-1/2 md:m-auto'>
                <img className='w-full h-auto rounded-md' src={imageSrc} alt={`View of ${location}`} />
            </div>

            <div className='flex items-center mt-4'>
                <Link href={`/apartment/${_id}`}>
                    <div className='bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-600 transition duration-300 ease-in-out'>
                        Detalles
                    </div>
                </Link>
                <h3 className='text-xl text-gray-800 ml-4'>{title}</h3>
            </div>
            <p className='text-gray-700 mt-2'>{description}</p>
        </div>
    );
}

export default ApartmentCard;
