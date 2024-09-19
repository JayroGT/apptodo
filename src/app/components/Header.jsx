import React from 'react'

export const Header = () => {
    return (
        <header className="flex justify-between h-20 bg-white text-white shadow-md w-full items-center px-8">
            <span className="text-black text-xl font-bold">COMPANY NAME</span>
            <div className='flex justify-between w-[400PX] items-center'>
                <button className="text-black text-sm font-bold">COMPANY NAME</button>
                <button className="text-black text-sm font-bold">COMPANY NAME</button>
                <div className='flex gap-4 items-center'>
                    <button>
                        <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726739625/bellIcon_b9r09y.svg" alt="asd" />
                    </button>
                    <button>
                        <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726739666/gearIcon_odpyjb.svg" alt="asd" />
                    </button>
                    <button>
                        <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726739819/userIcon_ccwefu.svg" alt="asd" />
                    </button>
                </div>
            </div>
        </header>
    )
}
