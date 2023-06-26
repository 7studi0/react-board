import React, { useEffect, useState } from 'react'
import Thread from './Thread'

const ThreadList = () => {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    fetch('/api/thread')
      .then(response => response.json())
      .then(data => setThreads(data))
  }, [])

  const filteredThreads = threads.filter(thread => thread.title)

  return (
    <div>
      <h2 className="ThreadListTitle">新着スレッド</h2>
      {filteredThreads
        .reverse()
        .slice(0, 10)
        .map((thread, index) => (
          <Thread key={index} thread={thread} />
        ))}
    </div>
  )
}

export default ThreadList
