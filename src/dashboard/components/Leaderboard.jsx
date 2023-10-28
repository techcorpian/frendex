import React from 'react'
import LeaderboardTabs from './LeaderboardTabs'

const Leaderboard = () => {
const tabs = ['Trending', 'Top Spenders', 'Top Sellers', 'Most Purchased', 'Most Fees Earned'];
  return (
    <div className='p-4 rounded-lg bg-zinc-800'>
        <h1 className='mx-2 my-5 text-white font-bold text-2xl'>Leaderboard</h1>

        <LeaderboardTabs tabs={tabs} defaultTab="Trending" />



    </div>
  )
}

export default Leaderboard