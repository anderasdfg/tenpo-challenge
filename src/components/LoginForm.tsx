import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/config/routes.config';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        try {
            setIsLoading(true);
            setError('');

            await login(email, password);

            navigate(ROUTES.HOME);
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full flex justify-center items-center">
            <form className="bg-blue-900 rounded-lg p-8 w-full max-w-md shadow-lg border-2 border-yellow-400" onSubmit={handleSubmit}>
                <h1 className="text-3xl text-yellow-400 mb-2 font-bold text-center">Welcome</h1>
                <p className="text-gray-100 mb-6 text-center">Sign in to continue</p>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                        <p>{error}</p>
                    </div>
                )}

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 font-medium text-yellow-300">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none bg-blue-800 text-white placeholder:text-gray-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        disabled={isLoading}
                        autoComplete="email"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 font-medium text-yellow-300">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-3 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none bg-blue-800 text-white placeholder:text-gray-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        disabled={isLoading}
                        autoComplete="current-password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 py-3 px-4 rounded font-semibold mt-4 transition disabled:bg-yellow-200 border-b-4 border-yellow-700 shadow-md"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Signing in...
                        </span>
                    ) : 'Sign In'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm; 