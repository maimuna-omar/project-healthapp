import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to='/'>Dashboard</Link>
        <Link to='/healthgoals'>HealthGoals</Link>
        <Link to='/dailyactivity'>Daily Activity</Link>
    </div>
  )
}

export default Header