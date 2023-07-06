import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'



const Header = () => {
  const navigate = useNavigate()

const {userInfo , setUserInfo} = useContext(UserContext)

  useEffect(() => {
    
    const myFun = async () => {


    const res = await axios.get("/profile")
    console.log(res);
    if(res.status === 200){
      console.log("resdata",res.data)
      setUserInfo(res.data);
    }
  }
  myFun()
  },[]);
  console.log("contetx",userInfo)




  const handleLogout = async () => {
    const logout = await axios.post("/logout")
    console.log(logout)
    if(logout.status === 200){ 

      setUserInfo(null)
      navigate("/")
    }

  }



  return (
    <div className='flex justify-between px-10  py-3 border'>
    <Link to='/'>SAN Blog</Link>
    <div>

    {
          userInfo?.id ? (
        <div className='flex gap-2'>
      <Link to='/create'>create Post</Link> 
      <button className='bg-black text-white p-2 rounded ' onClick={handleLogout}>logout</button>
        </div>
      ) : (

        <>
        <Link to='/login' className='m-2'>Login</Link>
    <Link to='/register' className='m-2'>Register</Link>
        </>
  )
}


    
    </div>

    </div>
  )
}

export default Header