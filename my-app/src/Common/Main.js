import { Routes, Route } from 'react-router-dom'
import ThreadList from '../Thread/ThreadList'
import ThreadNew from '../Thread/ThreadNew'
import ThreadPosts from '../Thread/ThreadPosts'

function App() {
  return (
    <main>
      <Routes>
        <Route path={`/`} element={<ThreadList />} />
        <Route path={`/thread/new`} element={<ThreadNew />} />
        <Route path={`/thread/:threadId`} element={<ThreadPosts />} />
      </Routes>
    </main>
  )
}

export default App
