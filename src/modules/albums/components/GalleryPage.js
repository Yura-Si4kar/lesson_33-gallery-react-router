import { Outlet } from 'react-router-dom';

import React from 'react';
import GalleryNavigation from './GalleryNavigation';

export default function GalleryPage() {
  return (
    <>
      <GalleryNavigation/>
      <Outlet/>
    </>
  )
}
