import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import DeepLinkPage from './pages/DeepLinkPage'
import StorePage from './pages/StorePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<DeepLinkPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
