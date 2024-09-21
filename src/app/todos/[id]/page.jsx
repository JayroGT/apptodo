"use client"; // Asegúrate de marcarlo como Client Component

import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { Global_Context } from '../../context/store';

const EditTaskPage = ({ params }) => {
    const { todos, updateTask } = useContext(Global_Context);
    const router = useRouter();
    const [task, setTask] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [inputValidate, setInputValidate] = useState(false);
    const [textTarea, setTextTarea] = useState(false);

    useEffect(() => {
        if (params.id) {
            const taskToEdit = todos.find(todo => {
                return todo.id === parseInt(params.id, 10) || todo.id === params.id;
            });

            if (taskToEdit) {
                setTask(taskToEdit);
                setTitle(taskToEdit.title);
                setDescription(taskToEdit.description);
            } else {
                console.error('Task not found');
                router.push('/todos');
            }
        }
        // setLoading(false);
    }, [params.id, todos, router]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
            setInputValidate(true);
            setTextTarea(true);
            return;
        }
        if (task) {
            updateTask({ id: task.id, title, description });
            router.push('/todos');
        }
    };

    const cancel = () => {
        router.push('/todos');
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-auto px-4 sm:px-0">
            <h1 className='w-full max-w-[600px] text-[36px] sm:text-[48px] pb-8 font-sans font-bold text-blue-950 text-center'>Edit Task</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-[600px]">
                <div className='h-auto'>
                    <input
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="h-[58px] block w-full px-3 py-2 border rounded border-slate-200 focus:outline-none focus:border-blue-500 sm:text-sm"
                        placeholder="Title"
                        maxLength={150}
                    />
                    <div className='w-full mx-4 flex justify-between'>
                        <span className='text-red-500 text-xs'>{inputValidate && 'Mandatory field'}</span>
                        <span className='text-red-500 text-xs'>{title.length >= 150 ? '150 characters maximum' : ''}</span>
                    </div>
                </div>
                <div className='h-auto'>
                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="h-[118px] block w-full px-3 py-2 border rounded border-slate-200 resize-none focus:outline-none focus:border-blue-500 sm:text-sm"
                        placeholder="Description"
                        maxLength={500}
                    />
                    <div className='w-full mx-4 flex justify-between'>
                        <span className='text-red-500 text-xs'>{textTarea ? 'Mandatory field' : null}</span>
                        <span className='text-red-500 text-xs'>{(description && description.length >= 500) ? '500 characters maximum' : ''}</span>
                    </div>
                </div>
                <div className='flex gap-4 justify-end'>
                    <button
                        type='button'
                        onClick={cancel}
                        className="w-[100px] sm:w-[108px] h-[40px] sm:h-[44px] bg-blue-950 rounded text-white hover:bg-blue-900"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="w-[100px] sm:w-[108px] h-[40px] sm:h-[44px] bg-blue-500 rounded text-white hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>


    );
};

export default EditTaskPage;
