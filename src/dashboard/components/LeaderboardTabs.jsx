import React, { useState } from 'react';

import Trending from '../leaderboard/Trending';
import TopSpenders from '../leaderboard/TopSpenders';
import TopSellers from '../leaderboard/TopSellers';
import MostPurchased from '../leaderboard/MostPurchased';
import MostFeesEarned from '../leaderboard/MostFeesEarned';

const LeaderboardTabs = ({ tabs, defaultTab }) => {

const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  return (
    <div>
        <div className="mx-2 mb-6 flex flex-row gap-3 items-center text-xs md:text-base">
        <ul className="flex">
            {tabs.map((tab) => (
            <button
                key={tab}
                className={`grow md:grow-0 p-2 md:px-4 md:py-3 rounded-lg mr-3 ${activeTab === tab ? 'bg-black text-lime-300' : 'bg-zinc-700 hover:bg-black cursor-pointer text-white'}`}
                onClick={() => setActiveTab(tab)}
            >
                {tab}
            </button>
            ))}
        </ul>
        </div>

        <div className='flex flex-row flex-wrap gap-1 md:gap-4 mx-2 my-4'>
            <input type="number" className='w-[128px] grow md:w-auto md:grow-0 bg-black px-4 py-2 text-white rounded-lg' placeholder='Min key price'/>
            <input type="number" className='w-[128px] grow md:w-auto md:grow-0 bg-black px-4 py-2 text-white rounded-lg' placeholder='Max key price'/>
            <select className=' bg-black px-4 py-[9px] text-white rounded-lg'>
                <option value="">5 minutes</option>
                <option value="">15 minutes</option>
                <option value="">30 minutes</option>
                <option value="">1 hour</option>
                <option value="">3 hours</option>
                <option value="">6 hours</option>
                <option value="">12 hours</option>
                <option value="">1 day</option>
            </select>
        </div>

      {/* Content for the active tab */}
      <div className="mt-4">
        {activeTab === 'Trending' && <Trending />}
        {activeTab === 'Top Spenders' && <TopSpenders />}
        {activeTab === 'Top Sellers' && <TopSellers />}
        {activeTab === 'Most Purchased' && <MostPurchased />}
        {activeTab === 'Most Fees Earned' && <MostFeesEarned />}
        {/* Add more tabs as needed */}
      </div>
    </div>
  )
}

export default LeaderboardTabs