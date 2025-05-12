import React from 'react';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 'medium',
    message = 'Loading...'
}) => {
    const sizeClasses = {
        small: 'w-6 h-6',
        medium: 'w-10 h-10',
        large: 'w-14 h-14'
    };

    return (
        <div className="flex flex-col items-center justify-center text-slate-500">
            <div
                className={`${sizeClasses[size]} border-4 border-slate-200 border-l-blue-600 rounded-full animate-spin mb-4`}
            ></div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoadingSpinner; 