import { Routes, Route } from 'react-router-dom'
import ThreadList from '../Thread/ThreadList'
import NewThread from '../Thread/NewThread'

function App() {
  return (
    <main>
      <Routes>
        <Route path={`/`} element={<ThreadList />} />
        <Route path={`/thread/new`} element={<NewThread />} />
      </Routes>
    </main>
  )
}

export default App
