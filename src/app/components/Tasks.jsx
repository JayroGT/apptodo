"use client";
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { Global_Context } from '../context/store';
import { Modal } from './Modal';

export const Tasks = () => {

    const { todos, deleteId, deleteAll, updateTask } = useContext(Global_Context);
    const router = useRouter();


    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({
        title: '',
        description: '',
        btn: '',
        action: null,
    })

    const openModal = (title, description, btn, action) => {
        setIsOpen(true);
        setModalData({ title, description, btn, action });
    };
    const closeModal = () => {
        setIsOpen(false);
        setModalData({
            title: '',
            description: '',
            btn: '',
            action: null
        });
    };

    const confirm = () => {
        if (modalData.action) modalData.action();
        closeModal();
    };
    const check = (id) => {
        // console.log("loading");
        const todo = todos.find(task => task.id === id);
        updateTask({
            id: todo.id,
            completed: !todo.completed,
        });
    };

    const handleEdit = (id) => {
        router.push(`/todos/${id}`)
    }

    const selectedCount = todos.filter(todo => todo.completed).length;


    return (
        <div className="max-w-[600px] mx-auto py-2 rounded-lg my-3 overflow-hidden pt-4">
            <div className="flex flex-col gap-9 h-[300px] px-4 border-b pb-20 overflow-y-scroll scrollbar-hide">
                {
                    todos.map(todo => (
                        <div key={todo.id} className="flex flex sm:flex-row gap-4 justify-between rounded-md">
                            <button onClick={() => check(todo.id)} className="w-8 h-8 border border-slate-400 rounded-full">
                                {
                                    todo.completed ?
                                        <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726741117/checkIcon_xwjgaq.svg" alt="" />
                                        : null
                                }
                            </button>
                            <div className={`flex flex-col justify-center flex-1 ${todo.completed && `opacity-35 line-through`}`} >
                                {
                                    todo.title ?
                                        <h1 className="break-words text-wrap text-blue-950 text-[16px] font-[500]">{todo.title}</h1>
                                        : null
                                }
                                {
                                    todo.description ?
                                        <p className="text-wrap break-words text-[13px] font-[400]">{todo.description}</p>
                                        : null
                                }
                            </div>
                            <div className='flex justify-end gap-4 items-center' >
                                {
                                    !todo.completed ?
                                        <>
                                            <button
                                                onClick={() => handleEdit(todo.id)}
                                                className="w-8 h-8 bg-red-200 rounded-full border border-slate-400 flex items-center justify-center">
                                                <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726739653/editIcon_avy1l5.svg" alt="Edit" />
                                            </button>
                                            <button
                                                onClick={() => openModal(
                                                    'Delete Task',
                                                    'Are you sure you want to delete this task? This action cannot be undone.',
                                                    'Delete',
                                                    () => deleteId(todo.id))
                                                }
                                                className="w-8 h-8 bg-red-200 rounded-full border-slate-400 border flex items-center justify-center">
                                                <img src="https://res.cloudinary.com/dmdriq0vl/image/upload/v1726740406/deleteIcon_pqwdev.svg" alt="Delete" />
                                            </button>
                                        </>
                                        : null
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='opacity-50 flex justify-between px-5'>
                <span>{selectedCount} item{selectedCount !== 1 ? 's' : ''} selected</span>
                <button onClick={() => openModal(
                    'Clear All Task',
                    'Are you sure you want to clear all tasks? This action cannot be undone.',
                    'Clear',
                    () => deleteAll()
                )}> Clear All</button>
            </div>
            {/* MODAL */}
            {
                isOpen && (
                    <div className='absolute inset-0 flex items-center justify-center z-50'>
                        <Modal
                            isOpen={isOpen}
                            title={modalData.title}
                            description={modalData.description}
                            btn={modalData.btn}
                            onClose={closeModal}
                            onConfirm={confirm}
                        />
                    </div>
                )
            }
        </div>

    );
};
