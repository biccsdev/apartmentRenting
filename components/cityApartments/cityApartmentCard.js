import Link from 'next/link';

function ApartmentCard(data) {
    const { _id, title, description, thumbnail } = data.data;
    return (
        <div className='bg-transparent pt-10 p-8'>
            <div className='rounded p-3 shadow-lg overflow-hidden'>
                <img src={thumbnail} alt='view of los cabos' />
            </div>
            <div className='flex p-3'><Link className='bg-orange-400 p-2 rounded shadow-lg ' href={`/apartment/${_id}`} >Detalles</Link>
                <h3 className='text-zinc-500 pl-4 pt-2'>{title}</h3>
            </div>
            <p className='text-zinc-800 p-3 text-justify'>{description}</p>
        </div>
    );
}

export default ApartmentCard;