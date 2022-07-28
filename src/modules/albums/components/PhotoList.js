import React from 'react'
import { useParams } from 'react-router-dom'
import usePhotos from '../hooks/usePhotos';
import PhotosListItem from './PhotosListItem';


export default function PhotoList() {
  const params = useParams();
  const photos = usePhotos(params.id);

  return (
    <>      
      {photos.map((photo) => (
        <PhotosListItem
        key={photo.id}
        item={photo} />
      ))
      }
    </>
  )
}