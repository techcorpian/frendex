import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';



const MainHeader = () => {
  return (
    <div className='py-5 flex flex-row items-center gap-5 justify-between'>
        <div className='flex flex-row items-center'>
            <h1 className='text-xl text-white mr-10'>
                <Link>FRENDEX <span className='text-lime-300'>beta</span></Link>
            </h1>
            <Link className='text-white hover:text-zinc-400'>Pre-Sales</Link>
        </div>

        <div className='hidden md:block relative grow max-w-3xl h-[50px]'>
            <div className='relative'>
                <input type="text" className=' w-full h-[50px] bg-zinc-900 text-white placeholder:text-zinc-300 outline-0 absolute inside-0 z-10 pl-[40px] pr-[10px] py-1 rounded-lg border border-black focus:border-blue-500' placeholder='search'/>

                <AiOutlineSearch className='w-5 h-5 absolute top-[16px] left-[15px] z-20 text-zinc-600'/>
            </div>
        </div>

        <div className='flex flex-row items-center justify-end gap-5'>
            <div className=''>
                <button className='p-2 px-4 bg-lime-400 rounded-md'>connect</button>
            </div>

        </div>
    </div>
  )
}

export default MainHeader