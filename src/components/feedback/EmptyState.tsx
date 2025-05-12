import React from 'react';

interface EmptyStateProps {
    message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
    return (
        <div className="text-center p-12 text-slate-500 bg-slate-100 rounded-lg my-8">
            {message}
        </div>
    );
};

export default EmptyState; 