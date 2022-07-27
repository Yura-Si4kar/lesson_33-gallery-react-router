import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AlbumsList from './modules/albums/components/AlbumsList';
import GalleryPage from './modules/albums/components/GalleryPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='gallery' element={<GalleryPage />} >
            <Route path='list' element={<AlbumsList/>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>   
  )
}
