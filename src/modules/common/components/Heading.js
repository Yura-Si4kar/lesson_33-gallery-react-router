import React from 'react';
import { Link } from 'react-router-dom';

export default function Heading() {
  return (
    <div className='menu'>Menu &#10148; 
      <Link to='gallery/list'>Gallery List</Link>
    </div>
  )
}
