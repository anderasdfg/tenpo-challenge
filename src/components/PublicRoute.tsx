import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/config/routes.config';
import type { PublicRouteProps } from '@/types/auth';

const PublicRoute = ({ children }: PublicRouteProps) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to={ROUTES.HOME} replace />;
    }

    return <>{children}</>;
};

export default PublicRoute; 