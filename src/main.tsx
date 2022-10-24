import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Authentication from './pages/Authentication'
import Content from './pages/Content';
import Play from './pages/Play';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/content" element={<Content />} />
        <Route path="/content/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
