import React from 'react'
import { useSelector,  useDispatch } from 'react-redux'
import { logoutFailure, logoutSuccess } from '../redux/user/userSlice.js'
import {persistor} from '../redux/store.js'

export default function Profile() {
    const { currentUser, loading, error } = useSelector((state) => state.user)
    console.log(currentUser)

    const handleLogout = async () => {
        try{
            const res = await fetch('/app/auth/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }   
            })
            const data = await res.json()
            if (data.success){
                useDispatch(logoutSuccess())
                persistor.purge()
            }

        } catch (error) {
            console.log(error)
            useDispatch(logoutFailure(error.message))
        }

    }
    return (
    <div className=''>
        <div className='flex flex-col'>
        <img className='w-full h-[150px] object-cover' src={currentUser.coverImage} />
        <img className='mx-3 shadow-sm absolute w-[120px] h-auto rounded-b-full object-cover' src={currentUser.avatar} />
        </div>
        <p>{currentUser.username}</p>
        <p>{currentUser.email}</p>
        <button onClick={handleLogout}>Logout</button>
        {error && <p>{error}</p>}
    </div>

  )
}
