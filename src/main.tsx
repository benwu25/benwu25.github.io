import { MemoryRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Contributions from './Contributions.tsx'

createRoot(document.getElementById('root')!).render(
<MemoryRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/contributions" element={<Contributions />} />
  </Routes>
</MemoryRouter>
)
