import { Outlet } from 'react-router-dom';
import { APP_NAME } from '@/config/app.config';

const PublicLayout = () => {
    return (
        <div className="flex flex-col h-screen bg-blue-900">
            <header className="bg-yellow-400 border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-xl font-bold text-blue-900">{APP_NAME}</h1>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center">
                <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default PublicLayout; 