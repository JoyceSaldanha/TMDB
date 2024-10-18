import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    let navigate = useNavigate();
  return (
    <div>
        <h2>Welcome</h2>
        <div className="button-container">
            <button onClick={() => navigate('/movie')}>Movie</button>
            <button onClick={() => navigate('/tv')}>TV</button>
        </div>
    </div>
  )
}
