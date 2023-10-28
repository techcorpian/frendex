import React from 'react'
import MiddleGridItem from './MiddleGridItem'

const MiddleGrid = () => {
  return (
    <div className='grid grid-cols-1 gap-5 my-5'>
        <div className='col-span-2 p-5 bg-zinc-800 rounded-lg'>
            <h2 className='text-white font-bold text-lg mb-1'>
                Don't have premium access yet?
            </h2>
            <p className='text-zinc-400 mb-3'>
                Purchase either a key from @0xMoonbags or @ManifoldTrading.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <MiddleGridItem />
                <MiddleGridItem />
            </div>
        </div>
        
    </div>
  )
}

export default MiddleGrid