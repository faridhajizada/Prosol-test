import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const authPaths = [
    '/sign-up',
    '/login',
    '/forgot-password',
    '/reset-password',
    '/verification',
    '/verify-email',
    '/new-password',
];

const RoutePrivate = ({
    children,
    isAuthenticated,
}: {
    children: ReactNode;
    isAuthenticated: boolean;
}) => {
    const pathname = useLocation().pathname;
    const isOnAuthPage = authPaths.some(path => pathname.includes(path));

    if (!isAuthenticated && !isOnAuthPage) {
        return <Navigate to="/auth/login" replace />;
    }

    if (isAuthenticated && isOnAuthPage) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RoutePrivate;
