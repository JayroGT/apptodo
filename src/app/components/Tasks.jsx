"use client";
import React, { useState } from 'react';

export const Tasks = ({onOpen}) => {
    const [selected, setSelected] = useState(false)
    const check = () => {
        setSelected((state) => !state); 
      };
    

    return (
        <div className="w-[600px] mx-auto py-2 rounded-lg my-3 overflow-hidden pt-4">
            <div className="h-[300px] px-4 border-b pb-20 overflow-y-scroll scrollbar-hide">
                <div className="flex gap-2 justify-between border-gray-200 rounded-md mb-8">
                    <button onClick={check} className="w-[32px] h-[32px] border-[1px] border-slate-400 rounded-full">
                        {
                            selected ?
                        <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726741117/checkIcon_xwjgaq.svg" alt="" />
                        :
                        null
                        }
                    </button>
                    <div className='flex flex-col gap-3 justify-center w-[400px]' >
                        <h1 className="text-blue-950 text-[16px] font-[500]">Build a Responsive Landing Page</h1>
                        <p className="text-[13px] font-[400]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney Cosd</p>
                    </div>
                    <div className='flex justify-end gap-4 items-center' >
                        <button className="w-[31px] h-[31px] bg-red-200 rounded-full border-[1px] border-slate-400 flex items-center justify-center">
                            <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726739653/editIcon_avy1l5.svg" alt="Edit" />
                        </button>
                        <button onClick={onOpen} className="w-[31px] h-[31px] bg-red-200 rounded-full border-slate-400 border-[1px] flex items-center justify-center">
                            <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726740406/deleteIcon_pqwdev.svg" alt="Delete" />
                        </button>


                    </div>
                </div>
            </div>
            <div className='flex justify-between px-5'>
                <span>3 item selected</span>
                <button>Clear All</button>
            </div>
        </div>
    );
};
