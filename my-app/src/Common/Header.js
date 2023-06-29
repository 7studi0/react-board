import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">掲示板</Link>
      </h1>
      <Link to="/thread/new">スレッドをたてる</Link>
    </header>
  )
}

export default Header
