import { createContext, useState, useCallback, useEffect } from 'react';
import { authService } from '@/services/authService';
import type { AuthContextType, User, AuthProviderProps } from '@/types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedToken = authService.getToken();
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
            // In a real app, we would validate the token and get user data
            setUser({
                email: 'stored@example.com',
                name: 'Stored User'
            });
        }
    }, []);

    const login = useCallback(async (email: string, password: string): Promise<void> => {
        try {
            const response = await authService.login(email, password);
            setToken(response.data.token);
            setUser(response.data.user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }, []);

    const logout = useCallback(() => {
        authService.logout();
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
    }, []);

    const authContextValue: AuthContextType = {
        isAuthenticated,
        token,
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext }; 