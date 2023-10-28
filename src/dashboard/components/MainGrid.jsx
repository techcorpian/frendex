import React from 'react'
import { BsArrowUp } from 'react-icons/bs';
import { BsArrowDown } from 'react-icons/bs';

import { griditems } from '../datas/MainGridDatas';


const MainGrid = () => {
  return (
    <>
    {
        griditems.map((data)=>(
    
    <div key={data.id} className='bg-zinc-900 p-2 sm:p-4 lg:p-5 rounded-lg drop-shadow-xl grid grid-cols-8 gap-3'>
        <div className='col-span-2'>
            <div className='p-2 lg:p-3 bg-black/20 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px] rounded-lg lg:rounded-lg mt-3'>
            {data.percentage >= 0 ?
                <BsArrowUp className='text-lime-400 text-4xl'/> :
                <BsArrowDown className='text-red-500 text-4xl'/>
            }
            </div>
        </div>
        <div className='col-span-6'>
            <p className='text-xs md:text-base font-light text-zinc-500'>{data.head}</p>
            <p className='font-bold text-sm text-white lg:text-xl xl:text-2xl'>
                {data.value} 
            </p>
            {data.percentage >= 0 ?
                <p className='text-xs md:text-sm lg:text-lg text-lime-400'>{data.percentage}% </p> :
                <p className='text-xs md:text-sm lg:text-lg text-red-500'>{data.percentage}% </p>
            }
            

        </div>
    </div>
          ))
    }
    </>
  )
}

export default MainGrid