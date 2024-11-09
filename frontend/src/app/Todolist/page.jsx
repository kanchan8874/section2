'use client';
import React, { use, useActionState, useState } from 'react'

const Todolist = () => {
    const [count, setCount] = useState(0);
    const [taskList, setTaskList] = useState([

    ]);

    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            if (!e.target.value) {
                alert('Please enter a task to add');
                return;
            }
            console.log(e.target.value);

            const newTask = { Text: e.target.value, completed: false };
            setTaskList([...taskList, newTask]);
            // spread operator ... tripal dot 
            e.target.value = ' ';
        }
    }
    const deleteTask = (index) => {
        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    };
    const updateTask = (index) => {
        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        setTaskList([...temp]);
    };

    return (
        <div>
            <h3 className='text-center text-3xl font-bold my-6'>Todolist</h3>
            <div className='max-w-[80%] mx-auto' >
                <p className='text-3xl'>{count}</p>
                <button className='border p-3'
                    onClick={() => { setCount(count + 1); console.log(count); }}>Add count</button>
                <div className='rounded border border-gray-300 shadow'>
                    <div className='p-5'>
                        <input
                            onKeyDown={addNewTask}
                            type="text"
                            className='w-full rounded bg-gray-200 p-5' />
                    </div>

                    <div className='border-t border-gray-300 p-5'>

                        {taskList.map((task, index) => {
                            return (
                                <div className='border shadow p-3 rounded mb-4 '>
                                    {task.completed ? (
                                        <p className='bg-green-700 text-white w-fit'>Completed</p>
                                    ) :( 
                                        <p className='bg-yellow-600 text-white w-fit rounded-full px-2'>pending</p>
                                    ) }

                                    <h2>{task.Text}</h2>

                                    <div className='flex mt-3 gap-5'>
                                        <button
                                            onClick={() => { deleteTask(index) }}
                                            className='bg-red-700 rounded-full py-1 px-3 text-white'
                                        >Delete</button>

                                        <button
                                            onClick={() => { updateTask(index) }}
                                            className='bg-blue-600 rounded-full py-1 px-3 text-white'
                                        >Complete</button>
                                    </div>

                                </div>
                            )
                        })

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Todolist;