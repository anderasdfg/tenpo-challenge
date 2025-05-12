import React from 'react';

interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
    return (
        <div className="text-center text-red-500 p-8 bg-red-50 rounded-lg mx-auto my-8 max-w-xl">
            <p>{message}</p>
            {onRetry && (
                <button
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                    onClick={onRetry}
                >
                    Try Again
                </button>
            )}
        </div>
    );
};

export default ErrorMessage; 