import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>掲示板</h1>
      <Link to="/thread/new">スレッドをたてる</Link>
    </header>
  )
}

export default Header
