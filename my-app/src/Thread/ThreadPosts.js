import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ThreadPosts = () => {
  const { threadId } = useParams()
  const [posts, setPosts] = useState([])
  const [threadTitle, setThreadTitle] = useState('')
  const [postTitle, setPostTitle] = useState('')

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`
      )
      const data = await response.json()
      setPosts(data.posts)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchThreadTitle = async () => {
    try {
      const response = await fetch(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads`
      )
      const data = await response.json()
      const thread = data.find(thread => thread.id === threadId)
      if (thread) {
        setThreadTitle(thread.title)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPosts()
    fetchThreadTitle()
  }, [threadId])

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ post: postTitle }),
        }
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      setPostTitle('')
      fetchPosts()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h2 className="postsTitle">{threadTitle}</h2>
      <div className="postsWrapper">
        <div>
          {posts.map(post => (
            <div key={post.id} className="postContainer">
              <p className="postBody">{post.post}</p>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                type="text"
                id="title"
                value={postTitle}
                onChange={e => setPostTitle(e.target.value)}
                placeholder="投稿しよう！"
                className="postsTextarea"
              />
            </div>
            <div className="postsButtonArea">
              <button type="submit">作成</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ThreadPosts
