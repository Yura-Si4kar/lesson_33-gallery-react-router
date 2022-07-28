import React from 'react'
import { useParams } from 'react-router-dom'
import usePhotos from '../hooks/usePhotos';
import PhotosListItem from './PhotosListItem';


export default function PhotoList() {
  const params = useParams();
  const {photos, fetchList} = usePhotos(params.id);

  return (
    <>      
      <button className='update_photo-list' onClick={fetchList}>Update List</button>
      <br/>
      {photos.map((photo) => (
        <PhotosListItem
        key={photo.id}
        item={photo} />
      ))
      }
    </>
  )
}