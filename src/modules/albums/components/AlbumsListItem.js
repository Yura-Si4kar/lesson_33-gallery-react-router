import React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumsListItem({album}) {
  return (
    <li className='list_item'>
      <Link to={'' + album.id}>{album.title}</Link>  
    </li>
  )
}
