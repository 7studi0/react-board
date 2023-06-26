import { Routes, Route } from 'react-router-dom'
import ThreadList from './ThreadList'
import NewThread from './NewThread'

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
