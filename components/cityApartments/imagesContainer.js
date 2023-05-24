import { useState } from 'react';
import Modal from 'react-modal';

const ImagesContainer = ({ images }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const openModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const handlePreviousImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="bg-slate-300 p-5 w-4/5 m-auto rounded">
            <div className={`container ${isFullScreen ? 'h-auto' : 'h-60'} overflow-hidden relative`}>
                <div className="grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto rounded cursor-pointer"
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-4 flex justify-end">
                {isFullScreen ? (
                    <button
                        onClick={toggleFullScreen}
                        className="bg-orange-400 text-white px-4 py-2 rounded-md"
                    >
                        Ver menos
                    </button>
                ) : (
                    <button
                        onClick={toggleFullScreen}
                        className="bg-orange-400 text-white px-4 py-2 rounded-md"
                    >
                        Ver mas
                    </button>
                )}
            </div>

            <Modal
                isOpen={selectedImageIndex !== null}
                onRequestClose={closeModal}
                className="modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-8 rounded w-4/5"
            >
                <div className="modal-navigation flex items-center justify-center">
                    <button onClick={handlePreviousImage} className="close-button bg-orange-400 text-white px-4 py-2 rounded-md">
                        &larr;
                    </button>
                    <img
                        src={images[selectedImageIndex]}
                        alt={`Image ${selectedImageIndex + 1}`}
                        className="w-full h-auto rounded"
                    />
                    <button onClick={handleNextImage} className="close-button bg-orange-400 text-white px-4 py-2 rounded-md">
                        &rarr;
                    </button>
                </div>
                <button onClick={closeModal} className="close-button bg-orange-400 text-white px-4 py-2 mt-5 rounded-md">
                    Cerrar
                </button>
            </Modal>
        </div>
    );
};

export default ImagesContainer;
