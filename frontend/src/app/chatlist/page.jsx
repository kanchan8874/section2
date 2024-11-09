'use client';
import React, { use, useActionState, useState } from 'react'

const Chatlist = () => {
    const [count, setCount] = useState();
    const [taskList, setTaskList] = useState([

    ]);



    const addNewChat = (e) => {
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

    return (
        <div>
            <h3 className='text-center text-3xl font-bold my-6'>Chatlist</h3>

            <div className='max-w-[80%] mx-auto' >

                <p className='text-3xl'>{count}</p>
                {/* <button className='border p-3'
                    onClick={() => { setCount(count + 1); console.log(count); }}>Add count</button> */}
                <div className='rounded border border-gray-300 shadow'>
                    

                    <div className='border-t border-gray-300 p-5'>

                        {taskList.map((task, index) => {
                            return (
                                <div className='border shadow p-3 rounded mb-4 '>


                                    <h2>{task.Text}</h2>

                                    <div className='flex mt-3 gap-5'>

                                    </div>

                                </div>
                            )
                        })

                        }

                    </div>
                    <div className='p-5'>
                        <input
                            onKeyDown={addNewChat}
                            placeholder='enter a task to add in your chatlist' type='text'
                            className='w-full rounded bg-gray-200 p-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatlist;