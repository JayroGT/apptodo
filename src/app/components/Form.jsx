import React from 'react';

export const Form = () => {
    return (
        <form className="flex flex-col gap-2 w-[600px] space-y-4 justify-center ">
            <input
                name="title"
                type="text"
                className="h-[58px] block w-full px-3 py-2 border rounded border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                placeholder="Title"
            />
            <textarea
                name="description"
                className="h-[118px] block w-full px-3 py-2 border rounded border-gray-300 resize-none shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                placeholder="Description"
            />
            <div className='flex justify-end'>
                <button
                    type="submit"
                    className="w-[84px] h-[44px] bg-blue-500 rounded text-white hover:bg-blue-600"
                >
                    Add
                </button>
            </div>

        </form>
    );
};
