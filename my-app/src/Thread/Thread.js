import React from 'react'
import { Link } from 'react-router-dom'

const Thread = ({ thread }) => {
  const handleClick = () => {
    window.location.href = `/thread/${thread.id}`
  }

  return (
    <div className="threadContainer" onClick={handleClick}>
      <Link to={`/thread/${thread.id}`} className="threadLink">
        <h2 className="threadTitle">{thread.title}</h2>
      </Link>
    </div>
  )
}
export default Thread
