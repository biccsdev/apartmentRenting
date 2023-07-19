import { useEffect, useState } from "react";
import { actionReview } from "../pages/api/endpoints";

export function Review({ userId, handleButton, item }) {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = async (id) => {
        handleButton(!isLiked, id);
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        if (userId) {
            for (let i = 0; i < item.likedBy.length; i++) {
                if (item.likedBy[i] == userId) {
                    setIsLiked(true);
                }
            }
        }

    }, [])

    return (
        <div className="pb-5 bg-slate-300 p-5 rounded" key={item._id}>
            <h1 className="font-bold">{item.creator}</h1>
            <h1 className="font-bold">{new Date(item.createdAt).toISOString().split("T")[0]}</h1>
            <h1>{item.comment}</h1>
            <h1>{item.likes} Likes</h1>
            {userId != 0 && (
                <button
                    className={`flex items-center focus:outline-none ${isLiked ? 'text-red-500' : 'text-gray-500'
                        }`}
                    onClick={() => handleLike(item._id)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isLiked ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        )}
                    </svg>
                    Like
                </button>
            )}

        </div>
    )
}