"use client";
import React, { useContext, useState } from 'react';
import { Global_Context } from '../context/store';

export const Form = () => {

    const { addTask } = useContext(Global_Context);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [inputValidate, setInputValidate] = useState(false)
    const [textTarea, setTextTarea] = useState(false)

    const submitTask = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
            setInputValidate(true);
            setTextTarea(true);
            return;
        }
        addTask(
            title,
            description
        )
        setTitle('')
        setDescription('')
        setInputValidate(false);
        setTextTarea(false);
    }



    return (
        <form onSubmit={submitTask} className="flex flex-col gap-8 w-full max-w-[600px] mx-auto justify-center p-4">
            <div className='h-[65px]'>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="h-[58px] block w-full px-3 py-2 border rounded border-slate-200 focus:outline-none focus:border-blue-500 sm:text-sm"
                    placeholder="Title"
                    maxLength={150}
                />
                <div className='flex justify-between'>
                    <span className='text-red-500 text-xs'>{inputValidate && 'Mandatory field'}</span>
                    <span className='text-red-500 text-xs'>{title.length >= 150 ? '150 characters maximum' : ''}</span>
                </div>
            </div>
            <div className='h-[145px]'>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="h-[118px] block w-full px-3 py-2 border rounded border-slate-200 resize-none focus:outline-none focus:border-blue-500 sm:text-sm"
                    placeholder="Description"
                    maxLength={500}
                />
                <div className='flex justify-between'>
                    <span className='text-red-500 text-xs'>{textTarea && 'Mandatory field'}</span>
                    <span className='text-red-500 text-xs'>{description.length >= 500 ? '500 characters maximum' : ''}</span>
                </div>
            </div>
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
