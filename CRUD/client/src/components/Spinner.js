import React from 'react';

const Spinner = () => {
    return (
    <div className="flex items-center justify-center space-x-2 h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
    </div>
    );
}

export default Spinner;
