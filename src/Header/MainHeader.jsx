import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { OpenClose } from '../sideBarTrueFalse'
import { setTrueFalse } from '../sideBarTrueFalse'
const MainHeader = () => {
  const dispatch = useDispatch()
  const OpenCloseT = useSelector(OpenClose)
  return (
    <div className='w-full h-[70px] bg-[black] flex flex-row items-center justify-around border-b-[2px]  border-teal-400 fixed top-0 z-[500]'>
        <div className='text-teal-400 font-bold flex flex-col text-[22px] animate-pulse'>
            <span className=''>Programmer </span>
            <span>Road Map 
                 <i className="fa-solid fa-signs-post text-[25px] ml-[7px] text-amber-800 animate-bounce "></i>
            </span>            
        </div>
        <div className='flex flex-row items-center text-[18px] cursor-pointer animate-slidedown hidden md:inline'>
          <Link to='/'>
            <span className='text-slate-300 ml-[15px] hover:text-teal-400 hover:underline' >HOME</span>
          </Link>  
            <span className='text-slate-300 ml-[15px]  hover:text-teal-400 hover:underline' >GAME DEVELOPEMENT</span>
            <span className='text-slate-300 ml-[15px]  hover:text-teal-400 hover:underline' >CYBER SECURITY</span>
            <span className='text-slate-300 ml-[15px] hover:text-teal-400 hover:underline' >AI, ML & DATA SCIENCE</span>

          
        </div>
        <div className='inline md:hidden' >
        {OpenCloseT ?
        <i className="fa-solid fa-x text-white text-[30px] cursor-pointer animate-slidedown smooth-transition" onClick={()=> dispatch(setTrueFalse(false))}></i>
           : <i className="fa-solid fa-bars text-white text-[30px] cursor-pointer animate-slidedown smooth-transition" onClick={()=> dispatch(setTrueFalse(true))}></i>
        }
        </div>
    </div>
  )
}

export default MainHeader