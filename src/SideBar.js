import React from 'react'
import { useSelector } from 'react-redux'
import { OpenClose } from './sideBarTrueFalse'
import { Link } from 'react-router-dom'
const SideBar = () => {
    const OpenCloseT =useSelector(OpenClose)
    console.log(OpenCloseT)
  return (
    <div className={` w-2/3  h-screen absolute  bg-black z-[400] smooth-transition md:hidden inline  ${OpenCloseT ? 'left-0 animate-slideleft' : '-left-full smooth-transition animate-slideright'} `}>
        <div className='w-full h-auto flex flex-col justify-center'>
            <Link to='/'>
            <div className='w-[95%] h-[60px] m-auto  mt-[75px] flex flex-row items-center justify-center bg-slate-600 rounded'>
                <i className="fa-solid fa-house text-[30px] text-orange-600"></i>
                <span className='text-[20px]  text-white ml-[10px]'>Home</span>
            </div>
            </Link>
            <Link to=''>
            <div className='w-[95%] h-[60px] m-auto  mt-[15px] flex flex-row items-center justify-center bg-slate-600 rounded'>
                <i className="fa-solid fa-apple-whole text-[30px] text-rose-500"></i>
            
                <span className='text-[20px]  text-white ml-[10px]'>App DEVELOPEMENT</span>
            </div>
            </Link>
            <Link to=''>
            <div className='w-[95%] h-[60px] m-auto  mt-[15px] flex flex-row items-center justify-center bg-slate-600 rounded'>
                <i className="fa-solid fa-gamepad text-[30px] text-teal-500"></i>
                
                <span className='text-[20px]  text-white ml-[10px]'>App DEVELOPEMENT</span>
            </div>
            </Link>
            <Link to=''>
            <div className='w-[95%] h-[60px] m-auto  mt-[15px] flex flex-row items-center justify-center bg-slate-600 rounded'>
                <i className="fa-solid fa-laptop text-[30px] text-black"></i>
               
                <span className='text-[20px]  text-white ml-[10px]'>AI, ML & DATA SCIEN</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default SideBar