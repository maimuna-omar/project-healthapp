import React from 'react'
// import { Link } from 'react-router-dom'

function Header() {
  return (
    
    <div className='header'>
        <li to='/'>Dashboard</li>
        <li to='/healthgoals'>HealthGoals</li>
        <li to='/dailyactivity'>Daily Activity</li>
    </div>
    
  )
}

export default Header