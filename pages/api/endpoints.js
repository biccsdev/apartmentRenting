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

export const createBooking = (bookingData, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.post('/booking', bookingData, { headers: header });
}

export const getAllBookings = (token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.get('/booking', header);
}

export const getBookingById = (bookingId, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.get(`/booking/${bookingId}`, bookingId, header);
}

export const reviewBooking = (bookingId, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.patch(`/booking/review/${bookingId}`, header);
}

export const getApartmentById = (apartmentId, token) => {
    const header = { 'Authorization': `Bearer ${token}` };
    return api.get(`/apartment/${apartmentId}`, header);
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