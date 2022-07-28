import React from 'react'

export default function PhotosListItem({item}) {
    return (
      <img className='photo' src={item.thumbnailUrl} alt={item.title}/>
  )
}
