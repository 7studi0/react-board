import React, { useEffect, useState } from 'react'
import Thread from './Thread'

const ThreadList = () => {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads')
      .then(response => response.json())
      .then(data => setThreads(data))
  }, [])

  return (
    <div>
      <h2 className="ThreadListTitle">新着スレッド</h2>
      {threads.reverse().map((thread, index) => (
        <Thread key={index} thread={thread} />
      ))}
    </div>
  )
}

export default ThreadList
