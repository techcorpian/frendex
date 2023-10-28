import React from 'react'
import MainGrid from '../components/MainGrid'
import MiddleGrid from '../components/MiddleGrid'
import Leaderboard from '../components/Leaderboard'

const Dashboard = () => {
  return (
    <>
        <h1 className='text-white font-bold text-4xl mt-5'>GM ☀️</h1>
        <p className='text-white text-xl mt-3'>Here are the stats for the past 24 hours.</p>

        <div className='grid grid-cols-2 md:grid-cols-4 mt-5 gap-4'>
            <MainGrid />
        </div>
        <MiddleGrid />
        <Leaderboard />

    </>
  )
}

export default Dashboard