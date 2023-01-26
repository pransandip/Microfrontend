import React from 'react';

export default ({ count, onClear }) => (
    < header className="bg-blue-700 text-white font-bold p-5 flex" >
        <div className="flex-grow">Awesome Header</div>
        <div>
            {count}
            <button
                onClick={onClear}
                className="bg-indigo-800 text-white font-bold ml-5 py-2 px-4 rounded"
            >
                clear
            </button>
        </div>
    </header >
)