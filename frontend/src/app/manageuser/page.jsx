'use client';
import axios from 'axios'
import { Result } from 'postcss'
import React, { useEffect } from 'react'
import { useState } from 'react';

const ManageUser = () => {
    const[userList, setUserList] = useState([]);



    const FetchUsers =()=>{
        axios.get('http://localhost:5000/user/getall')
        .then((result) =>{
            console.table(result.data);
            setUserList(result.data);
        }).catch((err) =>{
            console.log(err);
        })
    }
    //hoks menagelife cycle of components example useeffect(),usestate()
    useEffect(() => {
        FetchUsers();
    }, [])

    const deleteUser = (id) =>{
        axios.delete
    }
    
 




  return (
    <div className=''>
        <div className='container mx-auto py-10'>
            <h1 className='text-center text-2xl font-bold'>Manage user</h1>
            <table className='w-full'>
                <thead>
                    <tr className='bg-gray-600 text-white font-bold'>
                        <th className='p-3'>ID</th>
                        <th className='p-3'>Name</th>
                        <th className='p-3'>Email</th>
                        <th className='p-3'>Password</th>
                        <th className='p-3'>City</th>
                        <th className='p-3'>Created At</th>
                        <th className='p-3' colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map( (user) => { 
                            return(
                                <tr className='border bg-gray-200'>
                                    <td className='p-3'>{user._id} </td>
                                    <td className='p-3'>{user.name} </td>
                                    <td className='p-3'>{user.email} </td>
                                    <td className='p-3'>{user.password} </td>
                                    <td className='p-3'>{user.city} </td>
                                    <td className='p-3'>{new Date(user.createdAt).toDateString()}</td>  
                                    <td className='p-3'>
                                        <button className='bg-red-500 py-1 px-3 text-white rounded-full'>Delete</button>
                                    </td>
                                    <td className='p-3'>
                                        <button className='bg-blue-500 py-1 px-3 text-white rounded-full'>Update</button>
   
                                    </td>

                                </tr>
                            )
                        })

                    }

                </tbody>

            </table>
        </div>
    </div>
  )
}

export default ManageUser;