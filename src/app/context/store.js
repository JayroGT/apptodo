"use client";
import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


const Global_Context = createContext(null);

function Context({ children }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                if (!response.ok) {
                    throw new Error('error fetching data');
                }
                const data = await response.json();
                setTodos(data);
                // console.log('fetching data')
            } catch (e) {
                console.error(e)
            }
        };
        fetchTodos();
    }, []);

    const deleteId = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const deleteAll = () => {
        setTodos([]);
    }

    const addTask = (title, description) => {
        // console.log("addtas store")
        const newTask = {
            id: uuidv4(),
            title,
            description,
            completed: false,
        };
        setTodos(prevTasks => [...prevTasks, newTask]);
    };

    const updateTask = (updatedTask) => {
        setTodos((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? { ...task, ...updatedTask } : task
            )
        );
        // console.log("in store updating", updatedTask.completed);
    };



    return (
        <Global_Context.Provider
            value={{
                todos,
                addTask,
                updateTask,
                deleteAll,
                deleteId,
                updateTask
            }}
        >
            {children}
        </ Global_Context.Provider>
    )
}

export { Global_Context, Context };
