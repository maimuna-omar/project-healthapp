import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    
    <div className='header'>
     
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/healthgoals'>HealthGoals</Link>
        <Link to='/dailyactivity'>Daily Activity</Link>
       
      
    </div>
    
    
  )
}

export default Header