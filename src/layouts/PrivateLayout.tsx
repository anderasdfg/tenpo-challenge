import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { APP_NAME, COMPANY_NAME, MENU_ITEMS } from '@/config/app.config';

const PrivateLayout = () => {
    const { logout } = useAuth();

    const handleNavClick = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col min-h-screen bg-blue-900">
            <header className="bg-yellow-400 border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-xl font-bold text-blue-900">{APP_NAME}</h1>

                        <nav className="hidden md:block">
                            <ul className="flex space-x-8">
                                {MENU_ITEMS.map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            onClick={handleNavClick}
                                            className={({ isActive }) =>
                                                `px-3 py-2 text-sm font-medium rounded-md ${isActive
                                                    ? 'bg-blue-50 text-blue-700'
                                                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex items-center">
                            <button
                                onClick={logout}

                                className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 text-sm font-medium text-white rounded transition disabled:bg-yellow-200 border-b-4 border-yellow-700 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"

                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-yellow-400 border-t py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {COMPANY_NAME}</p>
                </div>
            </footer>
        </div>
    );
};

export default PrivateLayout; 