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

export const getAllBookings = (token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.get('/booking', header);
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

export const reviewBooking = (bookingId, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.patch(`/booking/review/${bookingId}`, header);
}

export const getApartmentById = async (apartmentId, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.get(`/apartment/${apartmentId}`, { headers: header });
    return response.data;
}

export const getAllApartments = async (token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    const response = await api.get('/apartment', { headers: header });
    return response.data;
}

export const uploadPaymentFile = (paymentData, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.post('/image/payment', paymentData, header);
}