import { useState } from 'react';

export default function ProfileComponent() {
    const router = useRouter();
    const data = router.query.apartment;
    console.log(data);
    const [showCode, setShowCode] = useState(false);

    const handleShowCode = () => {
        setShowCode(true);
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded p-4 shadow">
            <h1 className="text-2xl font-bold mb-4">Perfil</h1>

            <div className="mb-6">
                <h1 className="text-xl font-bold mb-2">Nombre Completo</h1>
                <h1 className="text-gray-600">John Doe</h1>
            </div>

            <div className="mb-6">
                <h1 className="text-xl font-bold mb-2">Correo</h1>
                <h1 className="text-gray-600">johndoe@example.com</h1>
            </div>

            <div className="mb-6">
                <h1 className="text-xl font-bold mb-2">Teléfono</h1>
                <h1 className="text-gray-600">123-456-7890</h1>
            </div>

            <div className="mb-6">
                <h1 className="text-xl font-bold mb-2">Rentas Activas</h1>
                <div className="p-4 bg-gray-100 rounded">
                    <h1 className="text-lg font-bold mb-2">Clave Caja de Llaves</h1>
                    <p className="text-gray-600 mb-4">Description</p>
                    {showCode ? (
                        <p className="text-2xl font-bold">55555</p>
                    ) : (
                        <p className="text-2xl font-bold">####</p>
                    )}
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        onClick={handleShowCode}
                    >
                        Show Code
                    </button>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-bold mb-2">Rentas Pasadas</h1>
                <div className="p-4 bg-gray-100 rounded">
                    <h1 className="text-lg font-bold mb-2">Title</h1>
                    <h3 className="text-gray-600">Date</h3>
                </div>
            </div>
        </div>
    );
};

