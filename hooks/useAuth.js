import { useState, useEffect } from 'react';
import { registerUser, loginUser, logoutUser } from '../pages/api/endpoints';
import AuthContext from './authContext';
import { useContext } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Check authentication status when the component mounts
    //     checkAuthStatus();
    // }, []);

    // const checkAuthStatus = async () => {
    //     try {
    //         if(user){

    //         }
    //         const response = await checkUserRole();
    //         setUser(response.data.user);
    //         setAuthenticated(true);
    //     } catch (error) {
    //         setError(error.response.data.message);
    //     }
    // };

    const register = async (userData) => {
        try {
            const response = await registerUser(userData);
            return true;
        } catch (error) {
            setError(error.response);
        }
    };

    const login = async (credentials) => {
        try {
            const response = await loginUser(credentials);
            setUser(response.data);
            setAuthenticated(true);
            return authenticated
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const logout = async () => {
        try {
            setUser(null);
            setAuthenticated(false);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const isAdmin = () => {
        return user.user.role === 'ADMIN';
    };

    return { user, authenticated, error, register, login, logout, isAdmin };
};

export const AuthProvider = ({ children }) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuthContext = () => useContext(AuthContext);
