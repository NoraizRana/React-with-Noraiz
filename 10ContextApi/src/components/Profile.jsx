import React from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user}=useContext(UserContext);

    if(!user) return <div>Please Login First</div>
    return <div>Welcome {user.username}</div>
}

export default Profile
