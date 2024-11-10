import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ResultPage = () => {
  const navigate = useNavigate()
  return (
    <div>
    <div>ResultPage</div>
    <button onClick={() =>navigate("/")}>GO TO MENU</button>
    </div>
  )
}

