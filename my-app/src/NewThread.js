import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NewThread = () => {
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch('/api/thread', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      setTitle('')
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h2>スレッド新規作成</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="スレッドタイトル"
          />
        </div>
        <div className="actionButtonArea">
          <Link to="/">Topに戻る</Link>
          <button type="submit">作成</button>
        </div>
      </form>
    </div>
  )
}

export default NewThread
