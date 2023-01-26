import React from 'react';
import useStore from "host/store";

export default () => {
    const { count, clear } = useStore();
    return (
        < header className="bg-blue-700 text-white font-bold p-5 flex" >
            <div className="flex-grow">Awesome Header</div>
            <div>
                {count}
                <button
                    onClick={clear}
                    className="bg-indigo-800 text-white font-bold ml-5 py-2 px-4 rounded"
                >
                    clear
                </button>
            </div>
        </header >
    )
}