// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmojisPage from './routes/EmojisPage';
import ShapesPage from './routes/ShapesPage';
import StoryPage from './routes/StoryPage';
import EditorialPage from './routes/EditorialPage';
import ChatPage from './routes/ChatPage';
import './styles/variables.css';
import './styles/global.css';
import './styles/routes/routes.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='emojis' element={<EmojisPage />} />
      <Route path='shapes' element={<ShapesPage />} />
      <Route path='story' element={<StoryPage />} />
      <Route path='editorial' element={<EditorialPage />} />
      <Route path='chat' element={<ChatPage />} />
      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>
);
