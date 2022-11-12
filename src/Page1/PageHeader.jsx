import React from 'react'
import What from '../img/What.jfif'
import Python from '../img/Python.png'
import NodeJs from '../img/NodeJs.png'
import MySql from  '../img/MySql.png'
const PageHeader = () => {
  return (
    <div className='w-full h-[auto] bg-[black] flex flex-row items-center relative mt-[50px] '>
        <div className='w-[250px] h-[250px] bg-gradient-to-br from-black to-[#1e29bf] rounded-full absolute top-[20px] translate-x-[-50px] animate-pulse'></div>
        <div className='w-[100px] h-[100px] hidden md:inline  bg-gradient-to-br from-white to-[#b71ebf] rounded-full animate-bounce absolute left-[300px] bottom-[300px] '></div>
        <div className='w-[40px] h-[40px] bg-gradient-to-br from-white to-[#1e91bf] rounded-full animate-bounce absolute left-[150px] bottom-[200px] '></div>
        <div className='absolute left-[100px]  animate-[spin_2s_linear_infinite] top-[320px] '>
            <img className='w-[90px] h-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
        </div>
        <div className='w-[800px] h-full m-auto z-50  bg-[#000000df] md:bg-slate-0 pb-[50px]'>
            <div className=''>
            <h1 className='text-center text-[30px] text-white font-medium pt-[30px] animate-slidedown'>WHAT IS A PROGRAMMING ?</h1>            
                <div className='text-center text-[19px] text-neutral-200 font-medium  mb-[20px] mt-[20px] animate-slideup'>
                A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.
                </div>              
                <img id='img'
                    src={What}
                />               
            </div>
        </div>
        <div className='absolute right-[100px] top-[40px] '>
            <img className='w-[180px] h-auto animate-[spin_3s_linear_infinite]' 
            src='https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667'
            />         
        </div>
        <div className='absolute right-[280px] top-[280px] '>
            <img className='w-[110px] h-auto animate-pulse ' 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png'
            />         
        </div>
        <div className='absolute right-[200px] bottom-[180px] '>
            <img className='w-[150px] h-auto animate-pulse animate-pulse  ' 
            src={NodeJs}
            />         
        </div>
        <div className='absolute right-[70px]  bottom-[50px]  animate-ping   '>
            <img className='w-[80px] h-auto animate-bounce rounded-full' 
            src={Python}
            />         
        </div>
        <div className='absolute  right-[10px] top-[330px] animate-bounce   '>
            <img className='w-[200px] h-auto rounded-full' 
            src={MySql}
            />         
        </div>
    </div>
  )
}

export default PageHeader