import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const registerUser = (userData) => {
    return api.post('/auth/register', userData);
};

export const loginUser = (credentials) => {
    return api.post('/auth/login', credentials);
};

// export const logoutUser = () => {
//     return api.post('/auth/logout');
// };

export const checkUserRole = () => {
    return api.get('/user/role');
};

export const createBooking = async (bookingData, token) => {
    const header = { 'Authorization': `Bearer ${token}`, 'Content-Type': `multipart/form-data` };
    const response = await api.post('/booking', bookingData, { headers: header });
    return response.data;
}

export const getAllBookings = async (token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.get('/booking', { headers: header });
    return response.data;
}

export const getAllUserBookings = async (userId, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.get('/booking', { params: userId, headers: header });
    return response.data;
}

export const getBookingById = (bookingId, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.get(`/booking/${bookingId}`, bookingId, header);
}

export const reviewBooking = async (bookingId, status, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const body = { 'status': status }
    const response = await api.patch(`/booking/review/${bookingId}`, body, { headers: header });
    return response.data;
}

export const getApartmentById = async (apartmentId, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.get(`/apartment/${apartmentId}`, { headers: header });
    return response.data;
}

export const getFileById = async (imageId, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.get(`/image/${imageId}`, { headers: header });
    return response.data;
}

export const getAllApartments = async (token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.get('/apartment', { headers: header });
    return response.data;
}

export const getAllApartmentsUnlocked = async () => {
    const response = await api.get('/apartment/unlocked');
    return response.data;
}

export const uploadPaymentFile = (paymentData, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.post('/image/payment', paymentData, header);
}

export const createReview = async (createReviewDto, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.post('/review', createReviewDto, { headers: header });
    return response.data;
}
export const findReviewByApartmentId = async (_id) => {
    const response = await api.get(`/review/apartment/${_id}`);
    return response.data;
}
// export const findReviewByApartmentId = async (_id, token) => {
//     const header = { 'Authorization': `Bearer ${token}` };
//     const response = await api.get(`/review/apartment/${_id}`, { headers: header });
//     return response.data;
// }
export const updateReview = async (_id, comment, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.update(`/review/${_id}`, comment, { headers: header });
    return response.data;
}
export const deleteReview = async (_id, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.delete(`/review/${_id}`, { headers: header });
    return response.data;
}