import React from 'react'

export const Modal = ({ isOpen, title, description, btn, onClose, onConfirm }) => {
    if (!isOpen) return null;


    return (
        <div className="fixed inset flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="h-[398px] w-[1000px] rounded-[32px] flex flex-col justify-between justify-center bg-white py-24 shadow-lg z-10">
                <button className="absolute top-5 right-6 w-[35px] h-[35px] rounded-full" onClick={onClose}>
                    <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726745020/closeIcon_ncwhcr.svg" alt="" />
                </button>
                <h2 className="text-center text-[48px] font-[700] text-blue-950">{title}</h2>
                <p className='text-center text-stone-600 text-[18px] font-[500]'>{description}</p>
                <div className='flex gap-4 justify-center'>
                    <button onClick={onClose} className="h-[44px] w-[109px] bg-blue-500 text-white rounded text-[18px]">Cancel</button>
                    <button onClick={onConfirm} className="h-[44px] w-[109px] bg-red-500 text-white rounded text-[18px]">{btn}</button>
                </div>
            </div>
        </div>
    )
}
