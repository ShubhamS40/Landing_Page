import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'

function Follower() {
    const [data,setData]=useState([])
    const api=useEffect(()=>{
   fetch("https://api.github.com/users/shubham2004-ux").then((res)=>res.json()).then((result)=>{
    setData(result)
   })
    },[data])
    // const params=useParams()
  return (
    <div className=' flex items-center space-x-[20%] p-10'>
        <img  src={data.avatar_url} alt="" />
        <div>
        <h1>MY name is {data.name}</h1>
        <h1>Bio: {data.bio}</h1>
        </div>
      
    </div>
  )
}

export default Follower
