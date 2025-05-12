import React from 'react';

interface EndOfListMessageProps {
    count: number;
    message?: string;
}

const EndOfListMessage: React.FC<EndOfListMessageProps> = ({
    count,
    message = "You've reached the end of the list!"
}) => {
    return (
        <div className="text-center mt-8 text-slate-500 p-4 bg-slate-100 rounded-lg">
            <p>{message}</p>
            <p className="text-sm mt-2 text-rose-700 font-medium">
                Total items loaded: {count}
            </p>
        </div>
    );
};

export default EndOfListMessage; 