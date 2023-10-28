import React from 'react'


const MiddleGridItem = () => {
  return (
    <div className='p-6 bg-zinc-900 rounded-lg'>
        <div className='flex flex-row items-center gap-5'>
            <div className='relative w-[50px] h-[50px] md:w-[80px] md:h-[80px]'>
                <img src="" alt="" className='object-contain rounded-full w-[80px] h-[80px]'/>
            </div>

            <div>
                <p className='text-white font-bold text-lg'></p>
                <p className='text-white mb-1'>@</p>
                <p className='text-zinc-400 font-mono text-sm'>0x000...0000</p>
            </div>
        </div>
        <div className='mt-7'>
            <div className='flex flex-row justify-between mb-2'>
                <p className='font-mono text-zinc-400'>
                    Price: 
                    <b className='text-white'> 0.12 Ξ</b>
                </p>
            </div>
        </div>
        <div className='px-4 py-3 text-zinc-400 rounded-lg bg-zinc-800 mt-4 text-center'>Connect wallet & sign in</div>
    </div>
  )
}

export default MiddleGridItem