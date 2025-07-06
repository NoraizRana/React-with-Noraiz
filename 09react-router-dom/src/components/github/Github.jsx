import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {

    //     fetch('https://api.github.com/users/NoraizRana')
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log(data);
    //         setData(data)
    //     })
    // }, [])
    return (

        <div className='bg-gray-700 text-center p-4 text-white'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Gihub image" width={200} /></div>
    )
}

export default Github

export const githubloader = async () => {
    const response = await fetch('https://api.github.com/users/NoraizRana')
    return response.json();
}