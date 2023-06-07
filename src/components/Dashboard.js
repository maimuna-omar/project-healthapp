import React, { useEffect, useState } from 'react';

const Dashboard = () => {
   
    return (
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/3 bg-purple-300 p-4  h-screen">
            <div className=".block items-center mb-4">
                <div className="w-fit h-fit pl-2 items-center">
                <img
                className=" h-25 w-20 rounded-full"
                src='https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg'
                alt="User Avatar"
              />
                </div>
              <h3 className="block ml-2 text-3xl font-bold px-4">username</h3>
            </div>
            <ul>
              <li className="mb-2">
                {/* <Link
                  to="/goals"
                  className="text-blue-500 hover:text-blue-700"
                > */}
                  Goals
                {/* </Link> */}
              </li>
              <li>
                {/* <Link
                  to="/activities"
                  className="text-blue-500 hover:text-blue-700"
                > */}
                  Activities
                {/* </Link> */}
              </li>
            </ul>
          </div>
    
          {/* Main Content */}
          <div className="p-4 h-screen w-full items-center bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Welcome, username!</h1>
    
            <h2 className="text-xl font-bold mb-2">Health Goals</h2>
            {/* <GoalList goals={goals} /> */}
    
            <h2 className="text-xl font-bold mb-2">Health Achievements</h2>
            {/* <AchievementList achievements={achievements} /> */}
          </div>
        </div>
      );
    };
    

  

export default Dashboard;
