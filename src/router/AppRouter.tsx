import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import PublicRoute from '@/components/PublicRoute';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import { ROUTES } from '@/config/routes.config';
import PublicLayout from '@/layouts/PublicLayout';
import PrivateLayout from '@/layouts/PrivateLayout';

const AppRouter = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route
                element={
                    <PublicRoute>
                        <PublicLayout />
                    </PublicRoute>
                }
            >
                <Route path={ROUTES.LOGIN} element={<Login />} />
            </Route>

            <Route
                element={
                    <ProtectedRoute>
                        <PrivateLayout />
                    </ProtectedRoute>
                }
            >
                <Route path={ROUTES.HOME} element={<Home />} />
            </Route>

            <Route
                path="*"
                element={<Navigate to={isAuthenticated ? ROUTES.HOME : ROUTES.LOGIN} replace />}
            />
        </Routes>
    );
};

export default AppRouter; 