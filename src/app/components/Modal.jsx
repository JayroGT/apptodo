import React from 'react'

export const Modal = ({ isOpen, title, description, btn, onClose, onConfirm }) => {
    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 mx-4">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] rounded-[32px] flex flex-col justify-between bg-white py-12 sm:py-24 shadow-lg z-10 relative">
                <button className="absolute top-5 right-6 w-[35px] h-[35px] rounded-full" onClick={onClose}>
                    <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726745020/closeIcon_ncwhcr.svg" alt="Close" />
                </button>
                <h2 className="text-center text-[28px] sm:text-[36px] md:text-[48px] font-bold text-blue-950">{title}</h2>
                <p className='text-center text-stone-600 text-[16px] sm:text-[18px] font-medium'>{description}</p>
                <div className='flex gap-4 justify-center mt-8'>
                    <button onClick={onClose} className="h-[40px] sm:h-[44px] w-[100px] sm:w-[109px] bg-blue-500 text-white rounded text-[16px] sm:text-[18px]">Cancel</button>
                    <button onClick={onConfirm} className="h-[40px] sm:h-[44px] w-[100px] sm:w-[109px] bg-red-500 text-white rounded text-[16px] sm:text-[18px]">{btn}</button>
                </div>
            </div>
        </div>

    )
}
