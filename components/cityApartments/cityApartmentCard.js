import Link from 'next/link';

function ApartmentCard() {
    return (
        <div className='bg-transparent pt-10 p-8'>
            <div className='rounded p-3 shadow-lg overflow-hidden'>
                <img src='/losCabos1/view.png' alt='view of los cabos' />
            </div>
            <div className='flex p-3'><Link className='bg-orange-400 p-2 rounded shadow-lg ' href='/'>Detalles</Link>
                <h3 className='text-zinc-500 pl-4 pt-2'>Condominio en Los Cabos</h3>
            </div>
            <p className='text-zinc-800 p-3 text-justify'>Increíble condominio muy cerca del centro. Rooftop con asador y alberca donde podrá disfrutar de la hermosa vista.
                Este condominio tiene todo lo necesario para una estancia confortable. Tendrás las mejores vacaciones aquí.</p>
        </div>
    );
}

export default ApartmentCard;