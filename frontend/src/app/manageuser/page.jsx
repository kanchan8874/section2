'use client';
import axios from 'axios'
import { Result } from 'postcss'
import React, { useEffect } from 'react'

const ManageUser = () => {
    const FetchUsers =()=>{
        axios.get('http://localhost:5000/user/getall')
        .then((result) =>{
            console.table(result.data);
        }).catch((err) =>{
            console.log(err);
        })
    }
    //hoks menagelife cycle of components example useeffect(),usestate()
    useEffect(() => {
        FetchUsers();
      
    }, [])
    
 




  return (
    <div className=''>
        <div className='container mx-auto py-10'>
            <h1 className='text-center text-2xl font-bold'>Manage user</h1>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>

            </table>
        </div>
    </div>
  )
}

export default ManageUser;