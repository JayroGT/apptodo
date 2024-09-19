"use client";
// import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Form } from '../components/Form'
import { Tasks } from '../components/Tasks'

const ToDos = () => {
  const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-auto">
      <h1 className=' w-[600px] text-[48px] pb-8 font-sans font-[750] text-blue-950'>Daily To Do List</h1>
      <div className='w-[600px]'>
        <Form />
      </div>
      <div className='w-[600px]'>
        <Tasks onOpen={openModal}/>
      </div>

      {/* MODAL */}
      {isOpen && (
                <div className="fixed inset flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="h-[398px] w-[1000px] rounded-[32px] flex flex-col justify-between justify-center bg-white py-24 shadow-lg z-10">
                        <button className="absolute top-5 right-6 w-[35px] h-[35px] rounded-full" onClick={closeModal}>
                            <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726745020/closeIcon_ncwhcr.svg" alt="" />
                        </button>
                        <h2 className="text-center text-[48px] font-[700] text-blue-950">Delete Task</h2>
                        <p className='text-center text-stone-600 text-[18px] font-[500]'>Are you sure you want to delete this task? This action cannot be undone..</p>
                        <div className='flex gap-4 justify-center'>
                            <button onClick={closeModal} className="h-[44px] w-[109px] bg-blue-500 text-white rounded text-[18px]">Cancel</button>
                            <button onClick={closeModal} className="h-[44px] w-[109px] bg-red-500 text-white rounded text-[18px]">Delete</button>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default ToDos
