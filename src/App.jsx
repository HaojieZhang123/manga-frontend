import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import DefaultLayout from './layout/DefaultLayout'
import Homepage from './pages/Homepage'
import DetailsPage from './pages/DetailsPage'
import AuthorsPage from './pages/AuthorsPage'
import GenresPage from './pages/GenresPage'
import StatusPage from './pages/StatusPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/manga/:id" element={<DetailsPage />} />
            <Route path="/authors" element={<AuthorsPage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/status" element={<StatusPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
