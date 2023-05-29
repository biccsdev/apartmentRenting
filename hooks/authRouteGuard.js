import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from './useAuth';

const AuthRouteGuard = ({ children, publicRoutes, privateRoutes, adminRoutes }) => {
    const { user, authenticated, isAdmin } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!authenticated && privateRoutes.includes(router.pathname)) {
            router.push('/login');
        }
        if (!isAdmin && adminRoutes.includes(router.pathname)) {
            router.push('/unauthorized');
        }
    }, [authenticated, isAdmin, router.pathname]);

    return children;
};

export default AuthRouteGuard;
